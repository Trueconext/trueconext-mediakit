// ===================================
// LANGUAGE TOGGLE
// ===================================
let currentLanguage = 'es';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    // Update toggle button
    const langIcon = document.getElementById('lang-icon');
    const langText = document.getElementById('lang-text');
    
    if (currentLanguage === 'en') {
        langIcon.textContent = '🇪🇸';
        langText.textContent = 'ES';
    } else {
        langIcon.textContent = '🇺🇸';
        langText.textContent = 'EN';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-es][data-en]');
    translatableElements.forEach(element => {
        const translation = element.getAttribute(`data-${currentLanguage}`);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// ===================================
// INTERACTIVE BACKGROUND
// ===================================
function initInteractiveBackground() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Mouse interaction
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener('touchmove', (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    });
    
    // Pulse effect near cursor
    class Pulse {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = 0;
            this.maxRadius = 100;
            this.opacity = 0.6;
            this.speed = 2;
        }
        
        update() {
            this.radius += this.speed;
            this.opacity -= 0.02;
        }
        
        draw() {
            ctx.strokeStyle = `rgba(236, 72, 153, ${this.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        isDead() {
            return this.opacity <= 0 || this.radius >= this.maxRadius;
        }
    }
    
    const pulses = [];
    let lastPulseTime = 0;
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw and update particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
            
            // Interactive effect with mouse
            if (mouse.x && mouse.y) {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.x -= Math.cos(angle) * force * 2;
                    particle.y -= Math.sin(angle) * force * 2;
                }
            }
        });
        
        // Create pulse effect
        if (mouse.x && mouse.y && Date.now() - lastPulseTime > 200) {
            pulses.push(new Pulse(mouse.x, mouse.y));
            lastPulseTime = Date.now();
        }
        
        // Draw and update pulses
        for (let i = pulses.length - 1; i >= 0; i--) {
            pulses[i].update();
            pulses[i].draw();
            
            if (pulses[i].isDead()) {
                pulses.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// FORM SUBMISSION (Mock)
// ===================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Mock submission (replace with real endpoint)
        console.log('Form submitted:', data);
        
        // Show success message
        alert(currentLanguage === 'es' 
            ? '¡Mensaje enviado! Nos pondremos en contacto pronto.' 
            : 'Message sent! We\'ll get in touch soon.');
        
        // Reset form
        form.reset();
        
        // Note: To make this work with real email, replace the form action
        // in index.html with a Formspree, EmailJS, or similar service URL
    });
}

// ===================================
// INTERSECTION OBSERVER (Fade-in animations)
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ===================================
// INITIALIZE LUCIDE ICONS
// ===================================
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===================================
// INIT ON LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language toggle
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    
    // Initialize interactive background
    initInteractiveBackground();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize icons
    initIcons();
    
    console.log('ValeriaVZG Media Kit loaded successfully! 🎉');
});
