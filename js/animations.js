/* ============================================
   syn. — GSAP Animations
   ============================================ */

const SynAnimations = {
    init() {
        gsap.registerPlugin(ScrollTrigger);
        this.initRevealAnimations();
        this.initNavScroll();
        this.initHexCardTilt();
        this.initParallax();
    },

    /* Scroll-triggered reveal animations */
    initRevealAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el, i) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    },
                    delay: (i % 3) * 0.1
                }
            );
        });
    },

    /* Navigation frosted glass on scroll */
    initNavScroll() {
        const nav = document.getElementById('mainNav');
        ScrollTrigger.create({
            start: 'top -80',
            onUpdate: (self) => {
                if (self.scroll() > 80) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        });
    },

    /* 3D tilt on hex cards */
    initHexCardTilt() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.hex-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / centerY * -8;
                    const rotateY = (x - centerX) / centerX * 8;

                    gsap.to(card, {
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformPerspective: 800,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });
        });

        document.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.hex-card');
            cards.forEach(card => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });
        });

        // Reset tilt when mouse leaves individual card
        document.querySelectorAll('.hex-card').forEach(card => {
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });
        });
    },

    /* Parallax subtle effects */
    initParallax() {
        // Hero content entrance
        gsap.from('.hero__content', {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3
        });

        // Big quote text animation
        gsap.fromTo('.big-quote__text', 
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.big-quote',
                    start: 'top 70%'
                }
            }
        );

        // Sourcing cards stagger
        ScrollTrigger.create({
            trigger: '.sourcing-grid',
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo('.sourcing-card',
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: 'power3.out'
                    }
                );
            },
            once: true
        });
    },

    /* Re-init tilt after hex grid is populated */
    refreshTilt() {
        this.initHexCardTilt();
    }
};
