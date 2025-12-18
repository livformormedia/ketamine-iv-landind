import { createClientFromRequest } from 'npm:@base44/sdk@0.7.1';

// Helper function to hash data with SHA256
async function hashSHA256(data) {
    if (!data) return null;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data.toLowerCase().trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req) => {
    try {
        const assessmentData = await req.json();
        
        const accessToken = Deno.env.get('FACEBOOK_ACCESS_TOKEN');
        const pixelId = Deno.env.get('FACEBOOK_PIXEL_ID');
        
        if (!accessToken || !pixelId) {
            return Response.json({ 
                error: 'Facebook credentials not configured' 
            }, { status: 500 });
        }

        // Hash the email from the assessment data
        const hashedEmail = await hashSHA256(assessmentData.email);
        
        const eventData = {
            data: [{
                event_name: 'Lead',
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                event_source_url: assessmentData.source_url || 'https://ketaminecentralga.com/assessment',
                user_data: {
                    em: hashedEmail,
                    ph: assessmentData.phone ? await hashSHA256(assessmentData.phone) : null,
                    fn: assessmentData.full_name ? await hashSHA256(assessmentData.full_name.split(' ')[0]) : null,
                    ln: assessmentData.full_name ? await hashSHA256(assessmentData.full_name.split(' ').slice(1).join(' ')) : null,
                    client_user_agent: assessmentData.user_agent || '',
                    client_ip_address: assessmentData.client_ip || ''
                },
                custom_data: {
                    status: assessmentData.status,
                    utm_source: assessmentData.utm_source || '',
                    utm_medium: assessmentData.utm_medium || '',
                    utm_campaign: assessmentData.utm_campaign || '',
                    utm_term: assessmentData.utm_term || '',
                    utm_content: assessmentData.utm_content || '',
                    lives_in_georgia: assessmentData.lives_in_georgia,
                    struggling_with: assessmentData.struggling_with?.join(', ') || '',
                    treatment_goals: assessmentData.treatment_goals?.join(', ') || ''
                }
            }]
        };

        const facebookResponse = await fetch(
            `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            }
        );

        const responseData = await facebookResponse.json();

        if (!facebookResponse.ok) {
            throw new Error(`Facebook API error: ${JSON.stringify(responseData)}`);
        }

        return Response.json({ 
            success: true,
            message: 'Lead event sent to Facebook successfully',
            facebook_response: responseData
        });

    } catch (error) {
        console.error('Error sending to Facebook:', error);
        return Response.json({ 
            error: error.message || 'Failed to send data to Facebook' 
        }, { status: 500 });
    }
});