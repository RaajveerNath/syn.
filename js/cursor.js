/* ============================================
   syn. — Custom Gold Cursor
   ============================================ */

(function() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');

    if (!dot || !ring) return;

    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        return;
    }

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isVisible) {
            isVisible = true;
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        }
    });

    document.addEventListener('mouseleave', () => {
        isVisible = false;
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    });

    // Interactive elements for hover expansion
    const interactiveSelectors = 'a, button, .hex-card, .trio-card, .ingredient-card__header, .explorer__drink-item, .hero__dot, .story__hex, .nav__link, .sourcing-card, .foundation-card, .waitlist-form__input, .footer__hex, .theme-toggle';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            dot.classList.add('expanded');
            ring.classList.add('expanded');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            dot.classList.remove('expanded');
            ring.classList.remove('expanded');
        }
    });

    // Smooth animation loop with spring physics for ring
    function animate() {
        // Dot follows precisely
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

        // Ring lags with spring easing
        const dx = mouseX - ringX;
        const dy = mouseY - ringY;
        ringX += dx * 0.12;
        ringY += dy * 0.12;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
})();
