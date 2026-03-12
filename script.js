// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00ffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff00ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Typing Effect
const typingText = document.getElementById('typingText');
const words = [
    'WELCOME TO BLACKHITT MARKETPLACE',
    'PREMIUM APPS & SERVICES',
    'WA MODS: DELTA, GB, FM, YO, ULTRA',
    'BANNED SOSMED • UNBAN WA • NOKOS',
    'OWNER: @mrblackhitt',
    'GROUP: @termux_indonesia_01',
    'GROUP: @allfiturblackhitt'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();

// AI Assistant Functions
function toggleAI() {
    const aiChat = document.getElementById('aiChat');
    if (aiChat.style.display === 'none') {
        aiChat.style.display = 'block';
    } else {
        aiChat.style.display = 'none';
    }
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        
        // Clear input
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            let response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
}

function handleAIKey(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function addMessage(text, sender) {
    const messagesDiv = document.getElementById('aiMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    
    const icon = document.createElement('i');
    icon.className = sender === 'bot' ? 'fas fa-robot' : 'fas fa-user';
    
    const textDiv = document.createElement('div');
    textDiv.textContent = text;
    
    messageDiv.appendChild(icon);
    messageDiv.appendChild(textDiv);
    messagesDiv.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateAIResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('harga') || msg.includes('price')) {
        return 'Harga mulai dari 5K - 500K tergantung jasa. Klik produk langsung ke owner @mrblackhitt untuk tanya detail!';
    } else if (msg.includes('delta') || msg.includes('gb') || msg.includes('wa mod')) {
        return 'Koleksi WA Mod: Delta GB v3.4.3, GBWhatsApp v25.80, FM WhatsApp, YoWA, ULTRA, UNIVERSE, SATHWBG. Semua premium!';
    } else if (msg.includes('banned') || msg.includes('unban')) {
        return 'Jasa banned sosmed (IG/FB/TikTok) 50K, banned nomor WA 75K, unban WA 150K. Garansi!';
    } else if (msg.includes('nokos')) {
        return 'Nokos semua operator mulai 5K. Bisa buat verifikasi WA/Telegram/IG. Stok selalu ada!';
    } else if (msg.includes('grup') || msg.includes('group')) {
        return 'Join grup Telegram:\n- @termux_indonesia_01\n- @allfiturblackhitt';
    } else if (msg.includes('owner')) {
        return 'Owner: @mrblackhitt di Telegram. Klik produk atau langsung chat!';
    } else {
        return 'Halo! Ada yang bisa saya bantu? Pilih produk di atas atau ketik pertanyaan. Semua link langsung ke owner @mrblackhitt';
    }
}

// Redirect to Owner
function redirectOwner(product) {
    const ownerUsername = 'mrblackhitt';
    const message = encodeURIComponent(`Halo owner, saya mau order: ${product}. Mohon info detailnya.`);
    window.open(`https://t.me/${ownerUsername}?text=${message}`, '_blank');
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .app-card, .group-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
