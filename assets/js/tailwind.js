// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    // Initialize mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuContent = document.createElement('div');
    mobileMenuContent.className = 'mobile-menu fixed w-full bg-dark-800/95 backdrop-blur-sm top-16 left-0 p-4 border-b border-dark-600 transform -translate-y-full transition-transform duration-300 ease-in-out md:hidden z-50';
    mobileMenuContent.innerHTML = `
        <nav class="space-y-4 py-2">
            <a href="/page/about.html" class="block hover:text-accent-blue transition">About</a>
            <a href="#projects" class="block hover:text-accent-blue transition">Projects</a>
            <a href="#skills" class="block hover:text-accent-blue transition">Skills</a>
            <a href="#contact" class="block hover:text-accent-blue transition">Contact</a>
        </nav>
    `;
    document.body.appendChild(mobileMenuContent);
    
    // Setup mobile menu functionality
    if (mobileMenuButton) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.setAttribute('aria-label', 'Toggle menu');
        
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenuContent.classList.toggle('-translate-y-full');
            this.setAttribute('aria-expanded', mobileMenuContent.classList.contains('-translate-y-full') ? 'false' : 'true');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuContent.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenuContent.classList.add('-translate-y-full');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking menu items
        mobileMenuContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuContent.classList.add('-translate-y-full');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading spinner
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<div class="spinner inline-block mr-2"></div>Sending...';
            submitButton.disabled = true;

            try {
                await emailjs.sendForm('service_jp6hjep', 'template_yourTemplateId', this);
                // Success state
                submitButton.innerHTML = '✓ Message Sent!';
                submitButton.classList.add('bg-green-500');
                this.reset();
                setTimeout(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.classList.remove('bg-green-500');
                    submitButton.disabled = false;
                }, 3000);
            } catch (error) {
                console.error('Failed to send message:', error);
                // Error state
                submitButton.innerHTML = '✕ Error! Try Again';
                submitButton.classList.add('bg-red-500');
                setTimeout(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.classList.remove('bg-red-500');
                    submitButton.disabled = false;
                }, 3000);
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('-translate-y-full');
            }
        });
    });
});

// Tailwind custom configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'accent-blue': '#3B82F6',
                'accent-purple': '#8B5CF6',
                'accent-teal': '#14B8A6',
                'dark-900': '#111827',
                'dark-800': '#1F2937',
                'dark-700': '#374151',
                'dark-600': '#4B5563',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-slow-reverse': 'spin 25s linear infinite reverse',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)'
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)'
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)'
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)'
                    }
                }
            }
        }
    }
};
