// ============================================
// Theme Toggle
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ============================================
// Mobile Menu Toggle
// ============================================

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================

const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ============================================
// Typing Animation
// ============================================

const typingText = document.getElementById('typing-text');
const typingStrings = [
    'Data Scientist',
    'Android Developer',
    'Full Stack Developer',
    'Software Engineer'
];

let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentString = typingStrings[stringIndex];
    
    if (isDeleting) {
        typingText.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % typingStrings.length;
        typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation after a short delay
setTimeout(typeText, 1000);

// ============================================
// Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation - slide up from bottom
document.addEventListener('DOMContentLoaded', () => {
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((header, index) => {
        header.classList.add('fade-in');
        header.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(header);
    });

    // About section elements
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    if (aboutText) {
        aboutText.classList.add('fade-in');
        observer.observe(aboutText);
    }
    if (aboutImage) {
        aboutImage.classList.add('fade-in');
        observer.observe(aboutImage);
    }
    highlightItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Skills section
    const skillsCategories = document.querySelectorAll('.skills-category');
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillsCategories.forEach((category, index) => {
        category.classList.add('fade-in');
        category.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(category);
    });
    
    skillItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${(index % 8) * 0.05}s`;
        observer.observe(item);
    });

    // Experience timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Certifications
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    // Contact section
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const contactMethods = document.querySelectorAll('.contact-method');
    const formGroups = document.querySelectorAll('.form-group');
    
    if (contactInfo) {
        contactInfo.classList.add('fade-in');
        observer.observe(contactInfo);
    }
    if (contactForm) {
        contactForm.classList.add('fade-in');
        observer.observe(contactForm);
    }
    contactMethods.forEach((method, index) => {
        method.classList.add('fade-in');
        method.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(method);
    });
    formGroups.forEach((group, index) => {
        group.classList.add('fade-in');
        group.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(group);
    });

    // Social links
    const socialLinks = document.querySelectorAll('.contact-social .social-link, .hero-social a');
    socialLinks.forEach((link, index) => {
        link.classList.add('fade-in');
        link.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(link);
    });
});

// ============================================
// Form Handling
// ============================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    showNotification('Message sent successfully!', 'success');
    
    // Reset form
    contactForm.reset();
});

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Skill Items Hover Effect
// ============================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Project Cards Animation
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// ============================================
// Parallax Effect for Hero Section
// ============================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ============================================
// Loading Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Resume Modal
// ============================================

function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside the content
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeResumeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('resume-modal');
            if (modal && modal.classList.contains('active')) {
                closeResumeModal();
            }
        }
    });
});

// ============================================
// Scroll to Top Button
// ============================================

const scrollToTopButton = document.getElementById('scroll-to-top');

// Show/hide scroll to top button based on scroll position
if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Console Message
// ============================================

console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cWant to connect? Feel free to reach out!', 'font-size: 14px; color: #6c757d;');

