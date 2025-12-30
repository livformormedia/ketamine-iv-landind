export default function ThankYouStandalone() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Standalone Thank You Page</h2>
      <p>Copy the HTML code below and use it as a standalone page:</p>
      <textarea 
        readOnly 
        style={{ width: '100%', height: '500px', fontFamily: 'monospace', padding: '10px' }}
        value={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Ketamine of Central Georgia</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { font-family: 'Montserrat', sans-serif !important; }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(255, 193, 7, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
        }
        
        .pulse-dot {
            animation: pulse 1.5s infinite;
        }
    </style>
</head>
<body>
    <div class="min-h-screen" style="background: linear-gradient(135deg, #f0fdfc 0%, #e0f2f1 100%);">
        <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5">
                
                <!-- Status Banner -->
                <div class="bg-[#FFF3CD] border-b-2 border-[#FFC107] px-6 py-6 text-center text-[#856404] font-bold flex items-center justify-center gap-3 text-lg">
                    <div class="w-4 h-4 bg-[#FFC107] rounded-full pulse-dot"></div>
                    APPLICATION PENDING: ACTION REQUIRED
                </div>

                <!-- Header Section -->
                <div class="px-8 py-12 text-center">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#352253] mb-4 leading-tight">
                        You Are One <span class="text-[#ec9e21] underline decoration-[#ec9e21]">Final Step</span> Away.
                    </h1>
                    
                    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 font-medium">
                        We have received your assessment, but we cannot process your application until you complete this step.
                    </p>
                    
                    <p class="text-base font-bold text-[#ec9e21] mt-4 uppercase tracking-wider">
                        👇 Select the time below for a 15-minute discovery call with Dr. Greenberg
                    </p>
                    
                    <div class="max-w-2xl mx-auto mt-6 text-left">
                        <ul class="space-y-3 text-base md:text-lg text-gray-700">
                            <li class="flex items-start gap-3">
                                <span class="text-[#ec9e21] font-bold flex-shrink-0 text-2xl">✓</span>
                                <span><strong>Discover if you're a candidate</strong> for rapid relief from treatment-resistant depression and anxiety</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-[#ec9e21] font-bold flex-shrink-0 text-2xl">✓</span>
                                <span><strong>Get a personalized treatment roadmap</strong> designed specifically for your condition and goals</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-[#ec9e21] font-bold flex-shrink-0 text-2xl">✓</span>
                                <span><strong>Walk away knowing exactly what your path to healing looks like</strong> (and what it costs)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Calendar Wrapper -->
                <div class="w-full bg-white border-t border-b border-gray-200" style="min-height: 800px;">
                    <iframe 
                        src="https://api.leadconnectorhq.com/widget/bookings/kccg-calls-1tv4yjl"
                        scrolling="yes" 
                        id="booking-calendar" 
                        title="Book Discovery Call"
                        class="w-full border-0"
                        style="min-height: 800px; height: 100%;"
                    ></iframe>
                </div>

                <!-- Benefits Section -->
                <div class="bg-gray-50 px-8 py-12">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <p class="font-bold text-[#b45309] mb-2 uppercase tracking-wide">
                            Why wait another day to feel better?
                        </p>
                        <p class="text-lg text-gray-600">
                            Every day you wait is another day of struggling. This call is your bridge to clarity, coverage verification, and potential healing.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                            <div class="text-[#ec9e21] flex-shrink-0 mt-1">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div>
                                <strong class="text-[#352253] text-lg block mb-1">Instant Confirmation</strong>
                                <p class="text-sm text-gray-600">
                                    Secure your spot in our program before we reach capacity for the month.
                                </p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                            <div class="text-[#ec9e21] flex-shrink-0 mt-1">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                                </svg>
                            </div>
                            <div>
                                <strong class="text-[#352253] text-lg block mb-1">Transparent Pricing</strong>
                                <p class="text-sm text-gray-600">
                                    Learn about our affordable cash-pay options and flexible payment plans during your call.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="px-8 py-8 text-center bg-white border-t border-gray-200">
                    <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/66cec5b30_Untitled1920x200px.png" 
                        alt="Ketamine of Central Georgia"
                        class="h-12 mx-auto opacity-80"
                    />
                    <p class="text-sm text-gray-500 mt-4">
                        Your journey to mental wellness begins here.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`}
      />
      <button 
        onClick={() => {
          const textarea = document.querySelector('textarea');
          textarea.select();
          document.execCommand('copy');
          alert('HTML copied to clipboard!');
        }}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#ec9e21',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Copy HTML to Clipboard
      </button>
    </div>
  );
}