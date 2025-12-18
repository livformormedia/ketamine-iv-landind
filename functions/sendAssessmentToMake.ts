import { createClientFromRequest } from 'npm:@base44/sdk@0.7.1';

Deno.serve(async (req) => {
    try {
        // Parse the request body
        const assessmentData = await req.json();
        
        // Get Make.com webhook URL from environment variable
        const makeWebhookUrl = Deno.env.get('MAKE_WEBHOOK_URL');
        
        if (!makeWebhookUrl) {
            return Response.json({ error: 'Make.com webhook URL not configured' }, { status: 500 });
        }

        // Send data to Make.com webhook
        const makeResponse = await fetch(makeWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...assessmentData,
                timestamp: new Date().toISOString()
            })
        });

        if (!makeResponse.ok) {
            throw new Error(`Make.com webhook failed with status: ${makeResponse.status}`);
        }

        return Response.json({ 
            success: true,
            message: 'Assessment data sent to Make.com successfully' 
        });

    } catch (error) {
        console.error('Error sending to Make.com:', error);
        return Response.json({ 
            error: error.message || 'Failed to send data to Make.com' 
        }, { status: 500 });
    }
});