/* ============================================
   syn. — Theme Toggle
   ============================================ */

(function() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check saved preference or system preference
    function getPreferredTheme() {
        const saved = localStorage.getItem('syn-theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('syn-theme', theme);
    }

    // Initialize
    setTheme(getPreferredTheme());

    // Toggle
    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        setTheme(current === 'light' ? 'dark' : 'light');
    });

    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('syn-theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();
