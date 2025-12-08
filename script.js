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
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Project Cards Animation
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;

    card.addEventListener('mouseenter', function () {
        const overlay = this.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });

    card.addEventListener('mouseleave', function () {
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

// ============================================
// 3D Sphere Grid System
// ============================================

class SphereGrid {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        // Configuration
        this.config = {
            sphereRadius: options.sphereRadius || 180,
            dragSensitivity: options.dragSensitivity || 0.5,
            momentumDecay: options.momentumDecay || 0.95,
            maxRotationSpeed: options.maxRotationSpeed || 5,
            baseNodeSize: options.baseNodeSize || 60,
            hoverScale: options.hoverScale || 1.2,
            autoRotate: options.autoRotate !== undefined ? options.autoRotate : true,
            autoRotateSpeed: options.autoRotateSpeed || 0.3,
            ...options
        };

        // Technology stack data
        this.techStack = [
            { id: 'python', icon: 'fab fa-python', name: 'Python' },
            { id: 'javascript', icon: 'fab fa-js', name: 'JavaScript' },
            { id: 'react', icon: 'fab fa-react', name: 'React' },
            { id: 'nodejs', icon: 'fab fa-node-js', name: 'Node.js' },
            { id: 'java', icon: 'fab fa-java', name: 'Java' },
            { id: 'git', icon: 'fab fa-git-alt', name: 'Git' },
            { id: 'docker', icon: 'fab fa-docker', name: 'Docker' },
            { id: 'aws', icon: 'fab fa-aws', name: 'AWS' },
            { id: 'vue', icon: 'fab fa-vuejs', name: 'Vue.js' },
            { id: 'angular', icon: 'fab fa-angular', name: 'Angular' }
        ];

        // State
        this.rotation = { x: 15, y: 15, z: 0 };
        this.velocity = { x: 0, y: 0 };
        this.isDragging = false;
        this.lastMousePos = { x: 0, y: 0 };
        this.spherePositions = [];
        this.nodes = [];
        this.animationFrame = null;

        this.init();
    }

    // ==========================================
    // MATHEMATICS UTILITIES
    // ==========================================

    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    normalizeAngle(angle) {
        while (angle > 180) angle -= 360;
        while (angle < -180) angle += 360;
        return angle;
    }

    clampSpeed(speed) {
        return Math.max(-this.config.maxRotationSpeed, Math.min(this.config.maxRotationSpeed, speed));
    }

    // ==========================================
    // FIBONACCI SPHERE DISTRIBUTION
    // ==========================================

    generateSpherePositions() {
        const positions = [];
        const count = this.techStack.length;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const angleIncrement = 2 * Math.PI / goldenRatio;

        for (let i = 0; i < count; i++) {
            const t = i / count;
            const inclination = Math.acos(1 - 2 * t);
            const azimuth = angleIncrement * i;

            let phi = inclination * (180 / Math.PI);
            let theta = (azimuth * (180 / Math.PI)) % 360;

            // Pole coverage adjustment
            const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
            if (phi < 90) {
                phi = Math.max(5, phi - poleBonus);
            } else {
                phi = Math.min(175, phi + poleBonus);
            }

            phi = 15 + (phi / 180) * 150;

            // Add randomization
            const randomOffset = (Math.random() - 0.5) * 20;
            theta = (theta + randomOffset) % 360;
            phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));

            positions.push({
                theta: theta,
                phi: phi,
                radius: this.config.sphereRadius
            });
        }

        return positions;
    }

    // ==========================================
    // 3D TRANSFORMATIONS
    // ==========================================

    calculateWorldPositions() {
        return this.spherePositions.map((pos, index) => {
            // Convert spherical to Cartesian
            const thetaRad = this.degreesToRadians(pos.theta);
            const phiRad = this.degreesToRadians(pos.phi);
            const rotXRad = this.degreesToRadians(this.rotation.x);
            const rotYRad = this.degreesToRadians(this.rotation.y);

            // Initial position on sphere
            let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
            let y = pos.radius * Math.cos(phiRad);
            let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

            // Apply Y-axis rotation (horizontal)
            const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
            const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
            x = x1;
            z = z1;

            // Apply X-axis rotation (vertical)
            const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
            const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
            y = y2;
            z = z2;

            // Calculate visibility and fade
            const fadeZoneStart = -10;
            const fadeZoneEnd = -30;
            const isVisible = z > fadeZoneEnd;
            let fadeOpacity = 1;
            if (z <= fadeZoneStart) {
                fadeOpacity = Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
            }

            // Calculate scale based on position
            const isPoleImage = pos.phi < 30 || pos.phi > 150;
            const distanceFromCenter = Math.sqrt(x * x + y * y);
            const maxDistance = this.config.sphereRadius;
            const distanceRatio = Math.min(distanceFromCenter / maxDistance, 1);
            const distancePenalty = isPoleImage ? 0.4 : 0.7;
            const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);
            const depthScale = (z + this.config.sphereRadius) / (2 * this.config.sphereRadius);
            const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

            return {
                x, y, z,
                scale,
                zIndex: Math.round(1000 + z),
                isVisible,
                fadeOpacity,
                originalIndex: index
            };
        });
    }

    // ==========================================
    // COLLISION DETECTION
    // ==========================================

    applyCollisionDetection(positions) {
        const adjusted = [...positions];

        for (let i = 0; i < adjusted.length; i++) {
            const pos = adjusted[i];
            if (!pos.isVisible) continue;

            let adjustedScale = pos.scale;
            const nodeSize = this.config.baseNodeSize * adjustedScale;

            for (let j = 0; j < adjusted.length; j++) {
                if (i === j) continue;
                const other = adjusted[j];
                if (!other.isVisible) continue;

                const otherSize = this.config.baseNodeSize * other.scale;
                const dx = pos.x - other.x;
                const dy = pos.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = (nodeSize + otherSize) / 2 + 25;

                if (distance < minDistance && distance > 0) {
                    const overlap = minDistance - distance;
                    const reductionFactor = Math.max(0.4, 1 - (overlap / minDistance) * 0.6);
                    adjustedScale = Math.min(adjustedScale, adjustedScale * reductionFactor);
                }
            }

            adjusted[i] = { ...pos, scale: Math.max(0.25, adjustedScale) };
        }

        return adjusted;
    }

    // ==========================================
    // RENDERING
    // ==========================================

    createNodes() {
        this.techStack.forEach((tech, index) => {
            const node = document.createElement('div');
            node.className = 'sphere-node';
            node.dataset.techId = tech.id;
            node.dataset.index = index;

            const icon = document.createElement('i');
            icon.className = tech.icon;
            node.appendChild(icon);

            this.container.appendChild(node);
            this.nodes.push(node);
        });
    }

    updateNodePositions() {
        let worldPositions = this.calculateWorldPositions();
        worldPositions = this.applyCollisionDetection(worldPositions);

        worldPositions.forEach((pos, index) => {
            const node = this.nodes[index];
            if (!node) return;

            if (!pos.isVisible) {
                node.style.display = 'none';
                return;
            }

            node.style.display = 'flex';
            const nodeSize = this.config.baseNodeSize * pos.scale;
            const containerRect = this.container.getBoundingClientRect();
            const centerX = containerRect.width / 2;
            const centerY = containerRect.height / 2;

            node.style.width = `${nodeSize}px`;
            node.style.height = `${nodeSize}px`;
            node.style.left = `${centerX + pos.x}px`;
            node.style.top = `${centerY + pos.y}px`;
            node.style.opacity = pos.fadeOpacity;
            node.style.transform = `translate(-50%, -50%)`;
            node.style.zIndex = pos.zIndex;
        });
    }

    // ==========================================
    // PHYSICS & MOMENTUM
    // ==========================================

    updateMomentum() {
        if (this.isDragging) return;

        // Apply decay
        this.velocity.x *= this.config.momentumDecay;
        this.velocity.y *= this.config.momentumDecay;

        // Stop if too slow
        if (!this.config.autoRotate && Math.abs(this.velocity.x) < 0.01 && Math.abs(this.velocity.y) < 0.01) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        // Update rotation
        let newY = this.rotation.y;
        if (this.config.autoRotate) {
            newY += this.config.autoRotateSpeed;
        }
        newY += this.clampSpeed(this.velocity.y);

        this.rotation.x = this.normalizeAngle(this.rotation.x + this.clampSpeed(this.velocity.x));
        this.rotation.y = this.normalizeAngle(newY);
    }

    // ==========================================
    // EVENT HANDLERS
    // ==========================================

    handleMouseDown = (e) => {
        e.preventDefault();
        this.isDragging = true;
        this.velocity = { x: 0, y: 0 };
        this.lastMousePos = { x: e.clientX, y: e.clientY };
    }

    handleMouseMove = (e) => {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.lastMousePos.x;
        const deltaY = e.clientY - this.lastMousePos.y;

        const rotationDelta = {
            x: -deltaY * this.config.dragSensitivity,
            y: deltaX * this.config.dragSensitivity
        };

        this.rotation.x = this.normalizeAngle(this.rotation.x + this.clampSpeed(rotationDelta.x));
        this.rotation.y = this.normalizeAngle(this.rotation.y + this.clampSpeed(rotationDelta.y));

        this.velocity = {
            x: this.clampSpeed(rotationDelta.x),
            y: this.clampSpeed(rotationDelta.y)
        };

        this.lastMousePos = { x: e.clientX, y: e.clientY };
    }

    handleMouseUp = () => {
        this.isDragging = false;
    }

    handleTouchStart = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        this.isDragging = true;
        this.velocity = { x: 0, y: 0 };
        this.lastMousePos = { x: touch.clientX, y: touch.clientY };
    }

    handleTouchMove = (e) => {
        if (!this.isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - this.lastMousePos.x;
        const deltaY = touch.clientY - this.lastMousePos.y;

        const rotationDelta = {
            x: -deltaY * this.config.dragSensitivity,
            y: deltaX * this.config.dragSensitivity
        };

        this.rotation.x = this.normalizeAngle(this.rotation.x + this.clampSpeed(rotationDelta.x));
        this.rotation.y = this.normalizeAngle(this.rotation.y + this.clampSpeed(rotationDelta.y));

        this.velocity = {
            x: this.clampSpeed(rotationDelta.x),
            y: this.clampSpeed(rotationDelta.y)
        };

        this.lastMousePos = { x: touch.clientX, y: touch.clientY };
    }

    handleTouchEnd = () => {
        this.isDragging = false;
    }

    // ==========================================
    // ANIMATION LOOP
    // ==========================================

    animate = () => {
        this.updateMomentum();
        this.updateNodePositions();
        this.animationFrame = requestAnimationFrame(this.animate);
    }

    // ==========================================
    // INITIALIZATION & CLEANUP
    // ==========================================

    init() {
        // Generate positions
        this.spherePositions = this.generateSpherePositions();

        // Create DOM nodes
        this.createNodes();

        // Set up event listeners
        this.container.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);

        this.container.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        document.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        document.addEventListener('touchend', this.handleTouchEnd);

        // Start animation
        this.animate();
    }

    destroy() {
        // Cancel animation
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        // Remove event listeners
        this.container.removeEventListener('mousedown', this.handleMouseDown);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);

        this.container.removeEventListener('touchstart', this.handleTouchStart);
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchend', this.handleTouchEnd);

        // Clear nodes
        this.nodes.forEach(node => node.remove());
        this.nodes = [];
    }
}

// ==========================================
// INITIALIZE SPHERE GRID
// ==========================================

let sphereGridInstance = null;

function initSphereGrid() {
    const container = document.getElementById('sphere-grid-container');
    if (!container) return;

    sphereGridInstance = new SphereGrid('sphere-grid-container', {
        sphereRadius: 180,
        dragSensitivity: 0.5,
        momentumDecay: 0.95,
        maxRotationSpeed: 5,
        baseNodeSize: 60,
        hoverScale: 1.2,
        autoRotate: true,
        autoRotateSpeed: 0.3
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSphereGrid);
} else {
    initSphereGrid();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (sphereGridInstance) {
        sphereGridInstance.destroy();
    }
});

