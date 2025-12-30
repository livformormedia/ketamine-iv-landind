// COPY THE HTML BELOW FOR YOUR ADS LANDING PAGE
// This is a complete standalone HTML file that includes everything from Home2 page

export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ketamine Therapy - IV Treatment for Depression & Anxiety</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
    <style>
        * { font-family: 'Poppins', sans-serif !important; }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(236, 158, 33, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(236, 158, 33, 0); }
        }
        .pulse-dot { animation: pulse-glow 1.5s infinite; }
        .modal-backdrop { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px); }
        @keyframes ping-slow {
            75%, 100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
    </style>
</head>
<body class="bg-white">

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center bg-gradient-to-br from-[#352253]/5 via-white to-[#ec9e21]/5 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#352253] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#ec9e21] rounded-full blur-3xl"></div>
    </div>
    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div class="max-w-5xl mx-auto text-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-[#352253]">
                How One IV Ketamine Treatment Can Help Shift Your Brain from Depressed/Anxious to Hopeful in as Little as 3 Weeks — or Your Money Back!*
            </h1>
            <p class="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-[#352253] font-semibold">
                90% of our patients have experienced an improvement in depression and anxiety
            </p>
            <p class="text-sm md:text-base mb-8 md:mb-10 text-[#352253]/70 max-w-3xl mx-auto">
                *If you complete 2 of the 6 infusions, experience no improvement, and choose to discontinue, we'll refund 100% of the package price.
            </p>
            <div class="w-full max-w-4xl mx-auto mb-8">
                <div class="relative w-full" style="padding: 56.25% 0 0 0">
                    <iframe src="https://fast.wistia.net/embed/iframe/nc5ldg3nj9?seo=true&videoFoam=true" title="Ketamine Therapy Video" allow="autoplay; fullscreen" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"></iframe>
                </div>
            </div>
            <div class="w-full max-w-4xl mx-auto">
                <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl">
                    <div class="flex flex-col items-center gap-1">
                        <span class="leading-tight">Start Healing Today</span>
                        <span class="text-xs md:text-sm font-normal opacity-90">Take the 30 second quiz</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Authority Logos -->
<section class="bg-white py-6 md:py-8 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs md:text-sm text-slate-500 mb-4 md:mb-6 uppercase tracking-wide">As Featured In</p>
        <div class="flex justify-center">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/66cec5b30_Untitled1920x200px.png" alt="Featured in major news outlets" class="w-full max-w-4xl h-auto">
        </div>
    </div>
</section>

<!-- Testimonials Gallery -->
<section class="py-16 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#352253] mb-12 md:mb-16">
            We love to speak with results, here's what our patients are saying
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/f063f33b5_WhatsAppImage2025-12-18at1328211.jpg" alt="Patient testimonial 1" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/38bb3cd35_WhatsAppImage2025-12-18at132821.jpg" alt="Patient testimonial 2" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/fe2ef6d39_WhatsAppImage2025-12-18at1328201.jpg" alt="Patient testimonial 3" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/4e6c6ebda_WhatsAppImage2025-12-18at132820.jpg" alt="Patient testimonial 4" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/286df1125_WhatsAppImage2025-12-18at1328192.jpg" alt="Patient testimonial 5" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/564476657_WhatsAppImage2025-12-18at1328191.jpg" alt="Patient testimonial 6" class="w-full h-auto">
            </div>
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/79ecdb1f4_WhatsAppImage2025-12-18at132819.jpg" alt="Patient testimonial 7" class="w-full h-auto">
            </div>
        </div>
    </div>
</section>

<!-- CTA Button -->
<div class="max-w-4xl mx-auto px-4 text-center py-12">
    <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow"></div>
        <span class="relative leading-tight">Start Healing Today</span>
    </button>
</div>

<!-- What to Expect Section -->
<section class="py-16 md:py-24 bg-gradient-to-br from-[#352253]/5 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#352253]">
            Here's What You'll Get at Your Visit
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#352253]/10 hover:border-[#352253]/30 transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold mb-3 text-[#352253]">Rapid Symptom Relief</h3>
                <p class="text-[#352253]/70 leading-relaxed">Experience significant improvement in anxiety and depression symptoms within 2-3 weeks.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#352253]/10 hover:border-[#352253]/30 transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold mb-3 text-[#352253]">Immediate Emotional Lightness</h3>
                <p class="text-[#352253]/70 leading-relaxed">Feel lighter and relieved, as if a weight has been lifted off your shoulders, often after the 1st or 2nd treatment.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#352253]/10 hover:border-[#352253]/30 transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold mb-3 text-[#352253]">Enhanced Resiliency</h3>
                <p class="text-[#352253]/70 leading-relaxed">Boost your ability to cope with daily stressors and challenges.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#352253]/10 hover:border-[#352253]/30 transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold mb-3 text-[#352253]">Positive Observable Changes</h3>
                <p class="text-[#352253]/70 leading-relaxed">Noticeable improvements in mood and demeanor, recognized by both you and those around you.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#352253]/10 hover:border-[#352253]/30 transition-all">
                <div class="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold mb-3 text-[#352253]">Suicidal Thought Management</h3>
                <p class="text-[#352253]/70 leading-relaxed">Receive effective support for managing and reducing suicidal thoughts in a serene, calming environment.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Button -->
<div class="max-w-4xl mx-auto px-4 text-center py-12">
    <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow"></div>
        <span class="relative leading-tight">Start Healing Today</span>
    </button>
</div>

<!-- Proof Section -->
<section class="py-16 md:py-24 bg-white relative overflow-hidden">
    <div class="absolute top-0 left-1/3 w-96 h-96 bg-[#ec9e21]/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/3 w-96 h-96 bg-[#352253]/20 rounded-full blur-3xl"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8 md:mb-12">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/2bc059c66_image.png" alt="FDA Cleared" class="w-full max-w-xs md:max-w-md mx-auto">
        </div>
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2 text-[#352253]">
                Backed by <span class="text-[#352253]">400+ Studies</span>.<br>Trusted by Patients Nationwide.
            </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div class="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div class="text-4xl md:text-5xl font-bold text-[#352253] mb-2">7 in 10</div>
                <p class="text-sm md:text-lg text-[#352253]/80">Patients with treatment-resistant depression report relief</p>
            </div>
            <div class="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div class="text-4xl md:text-5xl font-bold text-[#352253] mb-2">400+</div>
                <p class="text-sm md:text-lg text-[#352253]/80">Clinical studies at Yale, Stanford, NIH</p>
            </div>
            <div class="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div class="text-4xl md:text-5xl font-bold text-[#352253] mb-2">Lasting</div>
                <p class="text-sm md:text-lg text-[#352253]/80">Long-term improvement when paired with therapy</p>
            </div>
        </div>
        <div class="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 mb-12 md:mb-16 shadow-lg">
            <h3 class="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-[#352253]">Research Institutions</h3>
            <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16">
                <div class="text-base md:text-xl font-semibold text-[#352253]/80">Yale University</div>
                <div class="text-base md:text-xl font-semibold text-[#352253]/80">Stanford University</div>
                <div class="text-base md:text-xl font-semibold text-[#352253]/80">NIH</div>
                <div class="text-base md:text-xl font-semibold text-[#352253]/80">Johns Hopkins</div>
            </div>
        </div>
        <div class="bg-white border-2 border-red-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 md:gap-6 shadow-lg">
            <div class="text-4xl md:text-6xl font-bold text-red-500">CNN</div>
            <div class="text-center sm:text-left">
                <p class="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#352253]">"A Revolutionary Treatment for Depression"</p>
                <p class="text-sm md:text-base text-[#352253]/70">Featured in CNN Health Special Report</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Button -->
<div class="max-w-4xl mx-auto px-4 text-center py-12">
    <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow"></div>
        <span class="relative leading-tight">Start Healing Today</span>
    </button>
</div>

<!-- About Doctor Section -->
<section class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-12">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/898bd64d4_image.png" alt="Dr. Judah Greenberg" class="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl mx-auto object-cover">
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#352253] mb-8 md:mb-12">About Dr. Judah Greenberg</h2>
        <div class="max-w-4xl mx-auto">
            <div class="space-y-4 text-[#352253]/80 leading-relaxed text-center md:text-left">
                <p>Dr. Judah Greenberg grew up in Dallas, Texas, and earned both his undergraduate and medical degrees from the University of Pennsylvania. After eight Philadelphia winters, he headed back South and completed his internal medicine residency at Emory University in Atlanta (with his new wife happily on board).</p>
                <p>He went on to practice in the emergency department at the Atlanta VA Medical Center and later trained in dermatology and skin surgery. During his internal medicine training, he developed a deep appreciation for how closely mental health is tied to overall well-being—an outlook that continues to shape his whole-person approach to care.</p>
                <p>While practicing dermatology and skin cancer surgery in Middle Georgia, Dr. Greenberg maintained a strong interest in psychopharmacology and closely followed the growing medical research on ketamine therapy. After seeing firsthand how powerfully ketamine can help people struggling with mental health conditions and chronic pain, he made it his mission to bring this treatment to the Middle Georgia community.</p>
                <p>Dr. Greenberg is triple board-certified in Internal Medicine, Dermatology, and Micrographic Dermatologic Surgery. He lives in Macon with his wife and six energetic children.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Button -->
<div class="max-w-4xl mx-auto px-4 text-center py-12">
    <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow"></div>
        <span class="relative leading-tight">Start Healing Today</span>
    </button>
</div>

<!-- Final Invitation Section -->
<section id="assessment" class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-[#352253] to-slate-900 text-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-[#352253]/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#ec9e21]/20 rounded-full blur-3xl"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8 md:mb-12">
            <div class="inline-block relative">
                <div class="absolute inset-0 bg-[#352253]/20 rounded-full blur-3xl"></div>
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=600&fit=crop" alt="Hope and connection" class="relative rounded-full shadow-2xl w-full max-w-xs md:max-w-sm mx-auto border-4 border-[#352253]/50">
            </div>
        </div>
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2 text-white">
                You're Not Broken.<br>You're Ready for a<br>New Way Forward.
            </h2>
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-2">
                If you've done all the "right" things and still feel stuck, you know how discouraging it is to wonder whether real healing is possible.
            </p>
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-4 md:mt-6 max-w-4xl mx-auto px-2">
                This treatment may be the turning point that helps you feel like yourself again.
            </p>
        </div>
        <div class="max-w-2xl mx-auto">
            <div class="bg-gradient-to-br from-slate-900/80 to-[#352253]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-8 shadow-2xl border-2 border-[#352253]/30">
                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <svg class="w-6 h-6 text-[#ec9e21] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <div>
                            <p class="font-semibold text-white">Location</p>
                            <p class="text-slate-300">3312 Northside Dr. STE d235<br>Macon, GA 31210</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <svg class="w-6 h-6 text-[#ec9e21] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <div>
                            <p class="font-semibold text-white">Phone</p>
                            <p class="text-slate-300">478-201-9220</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <svg class="w-6 h-6 text-[#ec9e21] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <div>
                            <p class="font-semibold text-white">Email</p>
                            <p class="text-slate-300">info@ketamineofcentralgeorgia.com</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <svg class="w-6 h-6 text-[#ec9e21] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <div>
                            <p class="font-semibold text-white">Hours</p>
                            <p class="text-slate-300">Monday - Friday & Sunday: 9:00 AM - 5:00 PM<br>Closed on Saturdays</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-2xl h-80 border-2 border-[#352253]/30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8825!2d-83.6324!3d32.8407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUwJzI2LjUiTiA4M8KwMzcnNTYuNiJX!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

<!-- Floating CTA Button -->
<div id="floatingCTA" class="fixed bottom-6 left-0 right-0 z-50 px-4" style="display: none;">
    <div class="max-w-4xl mx-auto">
        <button onclick="openModal()" class="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow"></div>
            <span class="relative leading-tight">Start Healing Today</span>
        </button>
    </div>
</div>

<!-- Assessment Modal -->
<div id="assessmentModal" class="fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-70 p-4 overflow-y-auto" style="display: none; backdrop-filter: blur(8px);">
    <div class="relative w-full max-w-3xl my-8">
        <button onclick="closeModal()" class="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        
        <div id="progressBar" class="mb-6">
            <div class="flex justify-between items-center mb-2">
                <span class="text-white text-sm">Step <span id="currentStep">1</span> of 6</span>
                <span class="text-purple-300 text-sm"><span id="progress">17</span>% Complete</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
                <div id="progressFill" class="bg-gradient-to-r from-[#352253] to-[#ec9e21] h-2 rounded-full transition-all duration-300" style="width: 17%"></div>
            </div>
        </div>

        <div id="modalContent" class="bg-white rounded-3xl p-6 md:p-12 shadow-2xl max-h-[70vh] overflow-y-auto"></div>
    </div>
</div>

<script>
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/rctm6c6z5rfu14oj2o4qy4cxhapknekx';
const LEADCONNECTOR_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/0BHlTU6piHyy61dNErcM/webhook-trigger/182o3OsH4454tZS4YHiq';
const REDIRECT_URL = 'https://ketaminecenter.livformor.com/ty-keta';

let currentStep = 1;
let formData = {
    lives_in_georgia: '',
    date_of_birth: '',
    insurance_acknowledgment: '',
    struggling_with: [],
    treatment_goals: [],
    medical_history: [],
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    sms_consent: false,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
};

function openModal() {
    const urlParams = new URLSearchParams(window.location.search);
    formData.utm_source = urlParams.get('utm_source') || '';
    formData.utm_medium = urlParams.get('utm_medium') || '';
    formData.utm_campaign = urlParams.get('utm_campaign') || '';
    formData.utm_term = urlParams.get('utm_term') || '';
    formData.utm_content = urlParams.get('utm_content') || '';
    
    document.getElementById('assessmentModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderStep(1);
}

function closeModal() {
    document.getElementById('assessmentModal').style.display = 'none';
    document.body.style.overflow = 'unset';
}

function updateProgress(step) {
    document.getElementById('currentStep').textContent = step;
    document.getElementById('progress').textContent = Math.round((step / 6) * 100);
    document.getElementById('progressFill').style.width = ((step / 6) * 100) + '%';
}

function renderStep(step) {
    currentStep = step;
    updateProgress(step);
    const content = document.getElementById('modalContent');
    
    if (step === 1) {
        content.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Do you live in Georgia?</h2>
            <div class="space-y-4">
                <div onclick="setRadio('lives_in_georgia', 'yes')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.lives_in_georgia === 'yes' ? 'border-[#352253] bg-[#352253]/5' : ''}">
                    <input type="radio" name="lives_in_georgia" value="yes" ${formData.lives_in_georgia === 'yes' ? 'checked' : ''}>
                    <label class="text-lg cursor-pointer flex-1">Yes</label>
                </div>
                <div onclick="setRadio('lives_in_georgia', 'no')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.lives_in_georgia === 'no' ? 'border-[#352253] bg-[#352253]/5' : ''}">
                    <input type="radio" name="lives_in_georgia" value="no" ${formData.lives_in_georgia === 'no' ? 'checked' : ''}>
                    <label class="text-lg cursor-pointer flex-1">No</label>
                </div>
            </div>
            <div class="flex justify-end mt-8 pt-6 border-t border-slate-200">
                <button onclick="nextStep()" ${!formData.lives_in_georgia ? 'disabled' : ''} class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next →</button>
            </div>
        `;
    } else if (step === 2) {
        content.innerHTML = `
            <div class="space-y-8">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Date of Birth</h2>
                    <p class="text-slate-600 text-sm mb-4">Format: MM/DD/YYYY</p>
                    <input type="text" id="dob" value="${formData.date_of_birth}" maxlength="10" placeholder="MM/DD/YYYY" class="w-full text-lg p-6 border-2 border-slate-200 rounded-xl focus:border-[#352253] focus:outline-none">
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-3">Ketamine Therapy is Not Covered by Insurance</h3>
                    <p class="text-slate-600 mb-6">I understand that ketamine therapy is not covered by insurance and is an out-of-pocket investment in my mental health and future success.</p>
                    <div class="space-y-4">
                        <div onclick="setRadio('insurance_acknowledgment', 'yes')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.insurance_acknowledgment === 'yes' ? 'border-[#352253] bg-[#352253]/5' : ''}">
                            <input type="radio" name="insurance_acknowledgment" value="yes" ${formData.insurance_acknowledgment === 'yes' ? 'checked' : ''}>
                            <label class="text-lg cursor-pointer flex-1">YES</label>
                        </div>
                        <div onclick="setRadio('insurance_acknowledgment', 'no')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.insurance_acknowledgment === 'no' ? 'border-[#352253] bg-[#352253]/5' : ''}">
                            <input type="radio" name="insurance_acknowledgment" value="no" ${formData.insurance_acknowledgment === 'no' ? 'checked' : ''}>
                            <label class="text-lg cursor-pointer flex-1">NO (exit survey)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button onclick="prevStep()" class="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">← Back</button>
                <button onclick="nextStep()" class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold">Next →</button>
            </div>
        `;
        document.getElementById('dob').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2);
            if (value.length >= 5) value = value.slice(0, 5) + '/' + value.slice(5, 9);
            e.target.value = value;
            formData.date_of_birth = value;
        });
    } else if (step === 3) {
        content.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Which, if any, of the following are you struggling with?</h2>
            <div class="space-y-3">
                ${['anxiety', 'depression', 'ptsd', 'eating_disorder', 'autism', 'migraines', 'chronic_nerve_pain', 'other'].map(val => {
                    const labels = {anxiety: 'Anxiety', depression: 'Depression', ptsd: 'PTSD', eating_disorder: 'Eating Disorder', autism: 'Autism', migraines: 'Migraines', chronic_nerve_pain: 'Chronic Nerve Pain', other: 'Other'};
                    return `<div onclick="toggleCheck('struggling_with', '${val}')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.struggling_with.includes(val) ? 'border-[#352253] bg-[#352253]/5' : ''}">
                        <input type="checkbox" ${formData.struggling_with.includes(val) ? 'checked' : ''}>
                        <label class="text-lg cursor-pointer flex-1">${labels[val]}</label>
                    </div>`;
                }).join('')}
            </div>
            <div class="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button onclick="prevStep()" class="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">← Back</button>
                <button onclick="nextStep()" ${formData.struggling_with.length === 0 ? 'disabled' : ''} class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50">Next →</button>
            </div>
        `;
    } else if (step === 4) {
        content.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What do you hope to get out of treatment?</h2>
            <div class="space-y-3">
                ${['improve_mood', 'lower_anxiety', 'mental_clarity', 'break_negative_patterns', 'increase_motivation', 'process_trauma'].map(val => {
                    const labels = {improve_mood: 'Improve my mood and overall outlook', lower_anxiety: 'Lower my anxiety levels', mental_clarity: 'Achieve greater mental clarity', break_negative_patterns: 'Get \'unstuck\' or break free from negative thought patterns', increase_motivation: 'Increase motivation and drive', process_trauma: 'Process past trauma'};
                    return `<div onclick="toggleCheck('treatment_goals', '${val}')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.treatment_goals.includes(val) ? 'border-[#352253] bg-[#352253]/5' : ''}">
                        <input type="checkbox" ${formData.treatment_goals.includes(val) ? 'checked' : ''}>
                        <label class="text-lg cursor-pointer flex-1">${labels[val]}</label>
                    </div>`;
                }).join('')}
            </div>
            <div class="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button onclick="prevStep()" class="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">← Back</button>
                <button onclick="nextStep()" ${formData.treatment_goals.length === 0 ? 'disabled' : ''} class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50">Next →</button>
            </div>
        `;
    } else if (step === 5) {
        content.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Medical History</h2>
            <p class="text-slate-600 mb-6">Ketamine therapy isn't right for everyone. Please tell us about your medical history.</p>
            <div class="space-y-3">
                ${['pregnant_or_planning', 'schizophrenia_psychosis', 'family_schizophrenia', 'uncontrolled_hypertension', 'liver_problems', 'heart_failure', 'aneurysm_stroke', 'none'].map(val => {
                    const labels = {pregnant_or_planning: 'I am pregnant, or plan to become pregnant', schizophrenia_psychosis: 'I have a history of schizophrenia or psychosis', family_schizophrenia: 'My family has a history of schizophrenia or psychosis', uncontrolled_hypertension: 'I have uncontrolled hypertension', liver_problems: 'I have a history of liver problems or cirrhosis', heart_failure: 'I have had congestive heart failure', aneurysm_stroke: 'I have had an aneurysm or hemorrhagic stroke', none: 'None of these apply to me'};
                    return `<div onclick="toggleCheck('medical_history', '${val}')" class="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer ${formData.medical_history.includes(val) ? 'border-[#352253] bg-[#352253]/5' : ''}">
                        <input type="checkbox" ${formData.medical_history.includes(val) ? 'checked' : ''}>
                        <label class="text-lg cursor-pointer flex-1 ${val === 'none' ? 'font-semibold' : ''}">${labels[val]}</label>
                    </div>`;
                }).join('')}
            </div>
            <div class="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button onclick="prevStep()" class="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">← Back</button>
                <button onclick="nextStep()" ${formData.medical_history.length === 0 ? 'disabled' : ''} class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50">Next →</button>
            </div>
        `;
    } else if (step === 6) {
        content.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">How Can We Contact You?</h2>
            <p class="text-slate-600 mb-6">We'll use this information to reach out about your consultation.</p>
            <div class="space-y-6">
                <div>
                    <label class="text-lg font-semibold mb-2 block">First Name *</label>
                    <input type="text" id="first_name" value="${formData.first_name}" placeholder="John" class="w-full text-lg p-6 border-2 border-slate-200 rounded-xl focus:border-[#352253] focus:outline-none">
                </div>
                <div>
                    <label class="text-lg font-semibold mb-2 block">Last Name *</label>
                    <input type="text" id="last_name" value="${formData.last_name}" placeholder="Smith" class="w-full text-lg p-6 border-2 border-slate-200 rounded-xl focus:border-[#352253] focus:outline-none">
                </div>
                <div>
                    <label class="text-lg font-semibold mb-2 block">Email Address *</label>
                    <input type="email" id="email" value="${formData.email}" placeholder="john@example.com" class="w-full text-lg p-6 border-2 border-slate-200 rounded-xl focus:border-[#352253] focus:outline-none">
                </div>
                <div>
                    <label class="text-lg font-semibold mb-2 block">Phone Number *</label>
                    <input type="tel" id="phone" value="${formData.phone}" placeholder="(478) 123-4567" class="w-full text-lg p-6 border-2 border-slate-200 rounded-xl focus:border-[#352253] focus:outline-none">
                </div>
                <div class="flex items-start space-x-3 p-4 border-2 border-slate-200 rounded-xl">
                    <input type="checkbox" id="sms_consent" ${formData.sms_consent ? 'checked' : ''}>
                    <label for="sms_consent" class="text-sm cursor-pointer leading-relaxed">I Consent to Receive SMS Notifications from Ketamine Center Of Central Georgia. You can reply STOP to unsubscribe at any time.</label>
                </div>
            </div>
            <div class="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button onclick="prevStep()" class="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">← Back</button>
                <button onclick="submitForm()" class="bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white px-8 py-3 rounded-lg font-semibold">Submit</button>
            </div>
        `;
        ['first_name', 'last_name', 'email', 'phone'].forEach(field => {
            document.getElementById(field).addEventListener('input', function(e) {
                formData[field] = e.target.value;
            });
        });
        document.getElementById('sms_consent').addEventListener('change', function(e) {
            formData.sms_consent = e.target.checked;
        });
    }
}

function setRadio(field, value) {
    formData[field] = value;
    renderStep(currentStep);
}

function toggleCheck(field, value) {
    if (formData[field].includes(value)) {
        formData[field] = formData[field].filter(v => v !== value);
    } else {
        formData[field].push(value);
    }
    renderStep(currentStep);
}

function calculateAge(birthDate) {
    const parts = birthDate.split('/');
    if (parts.length !== 3) return 0;
    const month = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const today = new Date();
    const birth = new Date(year, month, day);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
}

function nextStep() {
    if (currentStep === 1 && formData.lives_in_georgia === 'no') {
        alert('Unfortunately, we currently only serve patients in Georgia.');
        return;
    }
    if (currentStep === 2) {
        const dob = document.getElementById('dob').value;
        formData.date_of_birth = dob;
        if (calculateAge(dob) < 18) {
            alert('You must be 18 years or older to qualify for ketamine therapy.');
            return;
        }
        if (formData.insurance_acknowledgment === 'no') {
            alert('Understanding the out-of-pocket investment is required to proceed.');
            return;
        }
    }
    if (currentStep === 5) {
        const disqualifying = ['pregnant_or_planning', 'schizophrenia_psychosis', 'family_schizophrenia', 'uncontrolled_hypertension', 'liver_problems', 'heart_failure', 'aneurysm_stroke'];
        if (formData.medical_history.some(c => disqualifying.includes(c))) {
            alert('Based on your medical history, ketamine therapy may not be safe for you at this time. Please consult with your primary care physician.');
            return;
        }
    }
    renderStep(currentStep + 1);
}

function prevStep() {
    renderStep(currentStep - 1);
}

async function submitForm() {
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
        alert('Please fill in all required fields');
        return;
    }
    
    const payload = {...formData, status: 'qualified'};
    
    try {
        await Promise.all([
            fetch(MAKE_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }),
            fetch(LEADCONNECTOR_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
        ]);
    } catch (e) {
        console.log('Webhook error:', e);
    }
    
    const redirectParams = new URLSearchParams({
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content
    });
    window.location.href = REDIRECT_URL + '?' + redirectParams.toString();
}

// Floating CTA scroll detection
window.addEventListener('scroll', function() {
    const floatingCTA = document.getElementById('floatingCTA');
    if (window.scrollY > 800) {
        floatingCTA.style.display = 'block';
    } else {
        floatingCTA.style.display = 'none';
    }
});
</script>

</body>
</html>`;

export default function StandaloneHTMLExport() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Standalone HTML Export</h1>
      <p className="mb-4">Copy the HTML code from this component file to use for your ads landing page.</p>
      <div className="bg-slate-100 p-4 rounded-lg">
        <p className="text-sm text-slate-600">The complete HTML is stored in the STANDALONE_HTML constant above.</p>
        <p className="text-sm text-slate-600">This file contains the full Home2 page with correct colors (#352253 and #ec9e21).</p>
      </div>
    </div>
  );
}