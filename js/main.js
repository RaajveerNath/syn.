/* ============================================
   syn. — Main Application Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Build dynamic sections
    buildNavratnaGrid();
    buildDrinkList();
    buildSourcingGrid();
    buildHoneycomb();

    // Select first drink
    selectDrink(0);

    // Init Three.js scenes
    SynThree.initHeroPrism('heroPrism');

    // Init GSAP animations
    SynAnimations.init();

    // Mobile menu
    initMobileMenu();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Waitlist forms
    initWaitlistForms();
});

/* ---- Build Navratna Hex Grid ---- */
function buildNavratnaGrid() {
    const grid = document.getElementById('hexGrid');
    if (!grid) return;

    DRINKS.forEach((drink, i) => {
        const card = document.createElement('div');
        card.className = `hex-card${drink.celebratory ? ' hex-card--celebratory' : ''} reveal`;
        card.innerHTML = `
            <div class="hex-card__swatch" style="background: ${drink.color}"></div>
            <span class="hex-card__number">No. ${drink.number}</span>
            <h3 class="hex-card__name" style="color: ${drink.color}">${drink.name}</h3>
            <span class="hex-card__gems">${drink.gems}</span>
            <p class="hex-card__desc">${drink.description}</p>
            <span class="hex-card__ingredients">${drink.ingredientList}</span>
        `;
        card.addEventListener('click', () => {
            document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => selectDrink(i), 600);
        });
        grid.appendChild(card);
    });
}

/* ---- Build Drink List Sidebar ---- */
function buildDrinkList() {
    const list = document.getElementById('drinkList');
    if (!list) return;

    DRINKS.forEach((drink, i) => {
        const li = document.createElement('li');
        li.className = 'explorer__drink-item';
        li.dataset.index = i;
        li.innerHTML = `
            <span class="explorer__drink-dot" style="background: ${drink.color}"></span>
            <span>${drink.name}${drink.celebratory ? ' ✦' : ''}</span>
        `;
        li.addEventListener('click', () => selectDrink(i));
        list.appendChild(li);
    });
}

/* ---- Select a Drink in Explorer ---- */
let currentDrinkIndex = -1;

function selectDrink(index) {
    if (index === currentDrinkIndex) return;
    currentDrinkIndex = index;

    const drink = DRINKS[index];
    const detail = document.getElementById('explorerDetail');
    const items = document.querySelectorAll('.explorer__drink-item');

    // Update active state
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Animate out
    gsap.to(detail, {
        opacity: 0,
        y: 15,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
            // Build content
            detail.innerHTML = `
                <h2 class="explorer__drink-name" style="color: ${drink.color}">${drink.name}${drink.celebratory ? ' ✦' : ''}</h2>
                <p class="explorer__drink-tagline">${drink.tagline}</p>
                <p class="explorer__drink-gems">${drink.gems}</p>
                <p class="explorer__drink-story">${drink.description}</p>
                <h4 class="explorer__ingredients-title">Ingredients</h4>
                ${drink.ingredients.map(ing => `
                    <div class="ingredient-card">
                        <div class="ingredient-card__header" onclick="this.parentElement.classList.toggle('open')">
                            <span class="ingredient-card__name">${ing.name}</span>
                            <span class="ingredient-card__toggle">+</span>
                        </div>
                        <div class="ingredient-card__body">
                            <div class="ingredient-card__content">
                                <p class="ingredient-card__story">${ing.story}</p>
                                <div class="ingredient-card__meta">
                                    ${ing.flavor ? `
                                    <div class="ingredient-card__meta-item">
                                        <span class="ingredient-card__meta-label">Flavor</span>
                                        <span class="ingredient-card__meta-value">${ing.flavor}</span>
                                    </div>` : ''}
                                    ${ing.science ? `
                                    <div class="ingredient-card__meta-item">
                                        <span class="ingredient-card__meta-label">Science</span>
                                        <span class="ingredient-card__meta-value">${ing.science}</span>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            `;

            // Animate in
            gsap.fromTo(detail, 
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        }
    });

    // Update 3D can
    SynThree.initExplorerCan('explorer3d', drink.color);
}

/* ---- Build Sourcing Grid ---- */
function buildSourcingGrid() {
    const grid = document.getElementById('sourcingGrid');
    if (!grid) return;

    SOURCING_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sourcing-card';
        card.innerHTML = `
            <h3 class="sourcing-card__name">${item.name}</h3>
            <span class="sourcing-card__region">${item.region}</span>
            <p class="sourcing-card__text">${item.text}</p>
        `;
        grid.appendChild(card);
    });
}

/* ---- Build Story Honeycomb ---- */
function buildHoneycomb() {
    const container = document.getElementById('storyHoneycomb');
    if (!container) return;

    // Arrangement: Row1: 0,1,2 | Row2: 3,4 (offset) | Row3: 5,6,7 | Row4: 8 (center)
    const arrangement = [
        { drink: 0, col: 1, row: 1 },
        { drink: 1, col: 2, row: 1 },
        { drink: 2, col: 3, row: 1 },
        { drink: 3, col: 1, row: 2 },
        { drink: 4, col: 2, row: 2 },
        { drink: 5, col: 1, row: 3 },
        { drink: 6, col: 2, row: 3 },
        { drink: 7, col: 3, row: 3 },
        { drink: 8, col: 2, row: 4 }
    ];

    arrangement.forEach(item => {
        const drink = DRINKS[item.drink];
        const hex = document.createElement('div');
        hex.className = 'story__hex';
        hex.style.background = drink.color;
        hex.style.gridColumn = item.col;
        hex.style.gridRow = item.row;
        hex.innerHTML = `<span class="story__hex-label">${drink.name}</span>`;

        // Offset even rows
        const isMobile = window.innerWidth <= 768;
        if (item.row === 2 || item.row === 4) {
            hex.style.marginLeft = isMobile ? '35px' : '43px';
        }

        hex.addEventListener('click', () => {
            document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => selectDrink(item.drink), 600);
        });

        container.appendChild(hex);
    });
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('mobileMenuClose');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    };

    close.addEventListener('click', closeMenu);

    menu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/* ---- Smooth Scroll ---- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ---- Waitlist Forms ---- */
function initWaitlistForms() {
    const forms = document.querySelectorAll('.waitlist-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const telInput = form.querySelector('input[type="tel"]');
            const email = emailInput.value;
            const phone = telInput.value;

            if (email) {
                // Log for now (connect to MailerLite later)
                console.log('New Sign-up:', { email, phone });

                // Show success
                const btn = form.querySelector('.btn');
                const origText = btn.textContent;
                btn.textContent = 'Waitlisted ✦';
                btn.style.background = '#4A7A4E';
                emailInput.value = '';
                telInput.value = '';

                setTimeout(() => {
                    btn.textContent = origText;
                    btn.style.background = '';
                }, 3000);
            }
        });
    });
}
