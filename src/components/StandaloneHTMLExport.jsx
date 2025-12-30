// COPY THE HTML BELOW FOR YOUR ADS LANDING PAGE
// This is a complete standalone HTML file that includes everything

export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ketamine Therapy - At-Home Treatment for Depression & Anxiety</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { font-family: 'Poppins', sans-serif !important; }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(255, 193, 7, 0); }
        }
        .pulse-dot { animation: pulse-glow 1.5s infinite; }
        .modal-backdrop { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px); }
    </style>
    
    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1006822321616040');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1006822321616040&ev=PageView&noscript=1"/></noscript>
</head>
<body class="bg-white">

<!-- Authority Logos -->
<div class="bg-white py-8 border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4">
        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/66cec5b30_Untitled1920x200px.png" alt="Ketamine of Central Georgia" class="h-16 mx-auto opacity-80">
    </div>
</div>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900/5 via-white to-amber-500/5 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-900 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div class="max-w-5xl mx-auto text-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-purple-900">
                How One IV Ketamine Treatment Can Help Shift Your Brain from Depressed/Anxious to Hopeful in as Little as 3 Weeks — or Your Money Back!*
            </h1>
            
            <p class="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-purple-900 font-semibold">
                90% of our patients have experienced an improvement in depression and anxiety
            </p>
            
            <p class="text-sm md:text-base mb-8 md:mb-10 text-purple-900/70 max-w-3xl mx-auto">
                *If you complete 2 of the 6 infusions, experience no improvement, and choose to discontinue, we'll refund 100% of the package price.
            </p>
            
            <div class="w-full max-w-4xl mx-auto mb-8">
                <div class="relative w-full" style="padding: 56.25% 0 0 0">
                    <iframe src="https://fast.wistia.net/embed/iframe/nc5ldg3nj9?seo=true&videoFoam=true"
                            title="Ketamine Therapy Video"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"></iframe>
                </div>
            </div>

            <button onclick="openAssessment()" class="w-full max-w-4xl bg-amber-500 hover:bg-amber-600 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl">
                <div class="flex flex-col items-center gap-1">
                    <span class="leading-tight">Start Healing Today</span>
                    <span class="text-xs md:text-sm font-normal opacity-90">Take the 30 second quiz</span>
                </div>
            </button>
        </div>
    </div>
</section>

<!-- Testimonials Gallery -->
<section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            We love to speak with results, here's what our patients are saying
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/f063f33b5_WhatsAppImage2025-12-18at1328211.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/38bb3cd35_WhatsAppImage2025-12-18at132821.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/fe2ef6d39_WhatsAppImage2025-12-18at1328201.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/4e6c6ebda_WhatsAppImage2025-12-18at132820.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/286df1125_WhatsAppImage2025-12-18at1328192.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/564476657_WhatsAppImage2025-12-18at1328191.jpg" alt="Testimonial" class="w-full h-auto object-cover"></div>
        </div>
    </div>
</section>

<!-- What to Expect Section -->
<section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Here's What You'll Get at Your Visit
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div class="text-4xl mb-4">🎯</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Rapid Symptom Relief</h3>
                <p class="text-gray-600">Experience significant improvement in anxiety and depression symptoms within 2-3 weeks.</p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div class="text-4xl mb-4">✨</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Immediate Emotional Lightness</h3>
                <p class="text-gray-600">Feel lighter and relieved, as if a weight has been lifted off your shoulders, often after the 1st or 2nd treatment.</p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div class="text-4xl mb-4">💪</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Enhanced Resiliency</h3>
                <p class="text-gray-600">Boost your ability to cope with daily stressors and challenges.</p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div class="text-4xl mb-4">🌟</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Positive Observable Changes</h3>
                <p class="text-gray-600">Noticeable improvements in mood and demeanor, recognized by both you and those around you.</p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div class="text-4xl mb-4">🕊️</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Suicidal Thought Management</h3>
                <p class="text-gray-600">Receive effective support for managing and reducing suicidal thoughts in a serene, calming environment.</p>
            </div>
        </div>
    </div>
</section>

<!-- Floating CTA Button -->
<div id="floating-cta" class="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden">
    <button onclick="openAssessment()" class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
        Start Healing Today →
    </button>
</div>

<!-- Assessment Modal -->
<div id="assessment-modal" class="fixed inset-0 z-50 hidden items-center justify-center modal-backdrop p-4 overflow-y-auto">
    <div class="relative w-full max-w-3xl my-8">
        <button onclick="closeAssessment()" class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div id="modal-content" class="bg-white rounded-3xl p-6 md:p-12 shadow-2xl max-h-[70vh] overflow-y-auto"></div>
    </div>
</div>

<script>
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/rctm6c6z5rfu14oj2o4qy4cxhapknekx';
const REDIRECT_URL = 'https://ketaminecenter.livformor.com/ty-keta';
let currentStep = 1;
let formData = {lives_in_georgia:'',date_of_birth:'',insurance_acknowledgment:'',struggling_with:[],treatment_goals:[],medical_history:[],full_name:'',email:'',phone:'',sms_consent:false,utm_source:'',utm_medium:'',utm_campaign:'',utm_term:'',utm_content:''};
function captureUTMs(){const u=new URLSearchParams(window.location.search);formData.utm_source=u.get('utm_source')||'';formData.utm_medium=u.get('utm_medium')||'';formData.utm_campaign=u.get('utm_campaign')||'';formData.utm_term=u.get('utm_term')||'';formData.utm_content=u.get('utm_content')||'';}
window.addEventListener('scroll',()=>{const f=document.getElementById('floating-cta');if(window.scrollY>800){f.classList.remove('hidden');}else{f.classList.add('hidden');}});
function openAssessment(){captureUTMs();document.getElementById('assessment-modal').classList.remove('hidden');document.getElementById('assessment-modal').classList.add('flex');document.body.style.overflow='hidden';currentStep=1;renderStep();if(typeof fbq!=='undefined'){fbq('trackCustom','opened-assessment');}}
function closeAssessment(){document.getElementById('assessment-modal').classList.add('hidden');document.getElementById('assessment-modal').classList.remove('flex');document.body.style.overflow='unset';}
function calculateAge(b){const p=b.split('/');if(p.length!==3)return 0;const m=parseInt(p[0],10)-1;const d=parseInt(p[1],10);const y=parseInt(p[2],10);const t=new Date();const birth=new Date(y,m,d);let a=t.getFullYear()-birth.getFullYear();const md=t.getMonth()-birth.getMonth();if(md<0||(md===0&&t.getDate()<birth.getDate())){a--;}return a;}
function toggleArrayItem(a,i){const idx=a.indexOf(i);if(idx>-1){a.splice(idx,1);}else{a.push(i);}}
async function handleNext(){if(currentStep===1&&formData.lives_in_georgia==='no'){await submitDisqualified('Not in Georgia');renderDisqualified('Unfortunately, we currently only serve patients in Georgia.');return;}if(currentStep===2){if(formData.date_of_birth&&calculateAge(formData.date_of_birth)<18){await submitDisqualified('Under 18 years old');renderDisqualified('You must be 18 years or older to qualify for ketamine therapy.');return;}if(formData.insurance_acknowledgment==='no'){await submitDisqualified('Did not acknowledge insurance policy');renderDisqualified('Understanding the out-of-pocket investment is required to proceed.');return;}}if(currentStep===5){const dis=['pregnant_or_planning','schizophrenia_psychosis','family_schizophrenia','uncontrolled_hypertension','liver_problems','heart_failure','aneurysm_stroke'];const has=formData.medical_history.some(c=>dis.includes(c));if(has){await submitDisqualified('Medical history contraindication');renderDisqualified('Based on your medical history, ketamine therapy may not be safe for you at this time. Please consult with your primary care physician.');return;}}if(currentStep===6){await submitQualified();return;}currentStep++;renderStep();}
function handleBack(){currentStep--;renderStep();}
async function submitDisqualified(r){const p={...formData,status:'disqualified',disqualification_reason:r};try{await fetch(MAKE_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)});}catch(e){console.error('Error:',e);}}
async function submitQualified(){const p={...formData,status:'qualified'};try{await fetch(MAKE_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)});if(typeof fbq!=='undefined'){fbq('track','Lead');}const u=new URLSearchParams();if(formData.utm_source)u.set('utm_source',formData.utm_source);if(formData.utm_medium)u.set('utm_medium',formData.utm_medium);if(formData.utm_campaign)u.set('utm_campaign',formData.utm_campaign);if(formData.utm_term)u.set('utm_term',formData.utm_term);if(formData.utm_content)u.set('utm_content',formData.utm_content);const r=u.toString()?REDIRECT_URL+'?'+u.toString():REDIRECT_URL;window.location.href=r;}catch(e){console.error('Error:',e);alert('Error submitting. Please try again.');}}
function canProceed(){switch(currentStep){case 1:return formData.lives_in_georgia!=='';case 2:return formData.date_of_birth!==''&&formData.insurance_acknowledgment!=='';case 3:return formData.struggling_with.length>0;case 4:return formData.treatment_goals.length>0;case 5:return formData.medical_history.length>0;case 6:return formData.full_name!==''&&formData.email!==''&&formData.phone!=='';default:return false;}}
function renderDisqualified(m){document.getElementById('modal-content').innerHTML='<div class="text-center"><div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><h2 class="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest</h2><p class="text-lg text-gray-600 mb-8">'+m+'</p><button onclick="closeAssessment()" class="bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg">Close</button></div>';}
function renderStep(){const pr=Math.round((currentStep/6)*100);let sc='';const pb='<div class="mb-6"><div class="flex justify-between items-center mb-2"><span class="text-purple-900 text-sm">Step '+currentStep+' of 6</span><span class="text-purple-600 text-sm">'+pr+'% Complete</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-purple-900 to-amber-500 h-2 rounded-full transition-all duration-300" style="width:'+pr+'%"></div></div></div>';if(currentStep===1){sc='<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Do you live in Georgia?</h2><div class="space-y-4"><div class="flex items-center space-x-3 p-4 border-2 '+(formData.lives_in_georgia==='yes'?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="formData.lives_in_georgia=\'yes\';renderStep();"><input type="radio" name="georgia" value="yes" '+(formData.lives_in_georgia==='yes'?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">Yes</label></div><div class="flex items-center space-x-3 p-4 border-2 '+(formData.lives_in_georgia==='no'?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="formData.lives_in_georgia=\'no\';renderStep();"><input type="radio" name="georgia" value="no" '+(formData.lives_in_georgia==='no'?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">No</label></div></div>';}else if(currentStep===2){sc='<div class="space-y-8"><div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Date of Birth</h2><p class="text-gray-600 text-sm mb-4">Format: MM/DD/YYYY</p><input type="text" id="dob-input" value="'+formData.date_of_birth+'" placeholder="MM/DD/YYYY" maxlength="10" class="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-900 focus:outline-none"></div><div><h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Ketamine Therapy is Not Covered by Insurance</h3><p class="text-gray-600 mb-6">I understand that ketamine therapy is not covered by insurance and is an out-of-pocket investment in my mental health and future success.</p><div class="space-y-4"><div class="flex items-center space-x-3 p-4 border-2 '+(formData.insurance_acknowledgment==='yes'?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="formData.insurance_acknowledgment=\'yes\';renderStep();"><input type="radio" name="insurance" value="yes" '+(formData.insurance_acknowledgment==='yes'?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">YES</label></div><div class="flex items-center space-x-3 p-4 border-2 '+(formData.insurance_acknowledgment==='no'?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="formData.insurance_acknowledgment=\'no\';renderStep();"><input type="radio" name="insurance" value="no" '+(formData.insurance_acknowledgment==='no'?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">NO (exit survey)</label></div></div></div></div>';}else if(currentStep===3){const o=[{value:"anxiety",label:"Anxiety"},{value:"depression",label:"Depression"},{value:"ptsd",label:"PTSD"},{value:"eating_disorder",label:"Eating Disorder"},{value:"autism",label:"Autism"},{value:"migraines",label:"Migraines"},{value:"chronic_nerve_pain",label:"Chronic Nerve Pain"},{value:"other",label:"Other"}];sc='<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which, if any, of the following are you struggling with?</h2><div class="space-y-3">'+o.map(opt=>'<div class="flex items-center space-x-3 p-4 border-2 '+(formData.struggling_with.includes(opt.value)?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="toggleArrayItem(formData.struggling_with,\''+opt.value+'\');renderStep();"><input type="checkbox" '+(formData.struggling_with.includes(opt.value)?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">'+opt.label+'</label></div>').join('')+'</div>';}else if(currentStep===4){const o=[{value:"improve_mood",label:"Improve my mood and overall outlook"},{value:"lower_anxiety",label:"Lower my anxiety levels"},{value:"mental_clarity",label:"Achieve greater mental clarity"},{value:"break_negative_patterns",label:"Get 'unstuck' or break free from negative thought patterns"},{value:"increase_motivation",label:"Increase motivation and drive"},{value:"process_trauma",label:"Process past trauma"}];sc='<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What do you hope to get out of treatment?</h2><div class="space-y-3">'+o.map(opt=>'<div class="flex items-center space-x-3 p-4 border-2 '+(formData.treatment_goals.includes(opt.value)?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="toggleArrayItem(formData.treatment_goals,\''+opt.value+'\');renderStep();"><input type="checkbox" '+(formData.treatment_goals.includes(opt.value)?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">'+opt.label+'</label></div>').join('')+'</div>';}else if(currentStep===5){const o=[{value:"pregnant_or_planning",label:"I am pregnant, or plan to become pregnant"},{value:"schizophrenia_psychosis",label:"I have a history of schizophrenia or psychosis"},{value:"family_schizophrenia",label:"My family has a history of schizophrenia or psychosis"},{value:"uncontrolled_hypertension",label:"I have uncontrolled hypertension"},{value:"liver_problems",label:"I have a history of liver problems or cirrhosis"},{value:"heart_failure",label:"I have had congestive heart failure"},{value:"aneurysm_stroke",label:"I have had an aneurysm or hemorrhagic stroke"}];sc='<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Medical History</h2><p class="text-gray-600 mb-6">Ketamine therapy isn't right for everyone. Please tell us about your medical history.</p><div class="space-y-3">'+o.map(opt=>'<div class="flex items-center space-x-3 p-4 border-2 '+(formData.medical_history.includes(opt.value)?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="toggleArrayItem(formData.medical_history,\''+opt.value+'\');renderStep();"><input type="checkbox" '+(formData.medical_history.includes(opt.value)?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1">'+opt.label+'</label></div>').join('')+'<div class="flex items-center space-x-3 p-4 border-2 '+(formData.medical_history.includes('none')?'border-purple-900 bg-purple-50':'border-gray-200')+' rounded-xl hover:border-purple-900 transition-colors cursor-pointer" onclick="toggleArrayItem(formData.medical_history,\'none\');renderStep();"><input type="checkbox" '+(formData.medical_history.includes('none')?'checked':'')+' class="w-5 h-5"><label class="text-lg cursor-pointer flex-1 font-semibold">None of these apply to me</label></div></div>';}else if(currentStep===6){sc='<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How Can We Contact You?</h2><p class="text-gray-600 mb-6">We'll use this information to reach out about your consultation.</p><div class="space-y-6"><div><label class="text-lg font-semibold mb-2 block">Full Name *</label><input type="text" id="name-input" value="'+formData.full_name+'" placeholder="John Smith" class="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-900 focus:outline-none"></div><div><label class="text-lg font-semibold mb-2 block">Email Address *</label><input type="email" id="email-input" value="'+formData.email+'" placeholder="john@example.com" class="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-900 focus:outline-none"></div><div><label class="text-lg font-semibold mb-2 block">Phone Number *</label><input type="tel" id="phone-input" value="'+formData.phone+'" placeholder="(478) 123-4567" class="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-900 focus:outline-none"></div><div class="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-xl"><input type="checkbox" id="sms-consent" '+(formData.sms_consent?'checked':'')+' class="w-5 h-5 mt-1"><label for="sms-consent" class="text-sm cursor-pointer leading-relaxed">I Consent to Receive SMS Notifications from Ketamine Center Of Central Georgia. You can reply STOP to unsubscribe at any time.</label></div></div>';}const nb='<div class="flex justify-between mt-8 pt-6 border-t border-gray-200">'+(currentStep>1?'<button onclick="handleBack()" class="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-semibold">← Back</button>':'<div></div>')+'<button onclick="handleNext()" '+(canProceed()?'':'disabled')+' class="ml-auto bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">'+(currentStep===6?'Submit':'Next')+' →</button></div>';document.getElementById('modal-content').innerHTML=pb+sc+nb;if(currentStep===2){const d=document.getElementById('dob-input');d.addEventListener('input',(e)=>{let v=e.target.value;if(v.length<formData.date_of_birth.length){formData.date_of_birth=v;return;}v=v.replace(/\\D/g,'');if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2);if(v.length>=5)v=v.slice(0,5)+'/'+v.slice(5,9);formData.date_of_birth=v;e.target.value=v;});}if(currentStep===6){document.getElementById('name-input').addEventListener('input',(e)=>formData.full_name=e.target.value);document.getElementById('email-input').addEventListener('input',(e)=>formData.email=e.target.value);document.getElementById('phone-input').addEventListener('input',(e)=>formData.phone=e.target.value);document.getElementById('sms-consent').addEventListener('change',(e)=>formData.sms_consent=e.target.checked);}}
</script>
</body>
</html>`;

export default function StandaloneHTMLExport() {
    return null;
}