function injectParticles(container, count) {
    if (!container) return;
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.borderRadius = '50%';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '0';
        p.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 6 + 3;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        const isPrimary = Math.random() > 0.5;
        p.style.background = isPrimary ? 'var(--primary)' : 'var(--accent)';
        p.style.boxShadow = `0 0 ${size * 2}px ${isPrimary ? 'var(--primary)' : 'var(--accent)'}`;
        container.appendChild(p);
        p.animate([
            { top: '100%', transform: 'scale(0)', opacity: 0 },
            { opacity: 0.9, offset: 0.2 },
            { opacity: 0.7, offset: 0.8 },
            { top: '-10%', transform: 'scale(1.5)', opacity: 0 }
        ], {
            duration: Math.random() * 10000 + 12000,
            delay: -(Math.random() * 10000),
            iterations: Infinity,
            easing: 'linear'
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.title = 'Retour en haut';
    Object.assign(backToTop.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        background: 'var(--primary)',
        color: '#fff',
        border: 'none',
        fontSize: '1.3rem',
        cursor: 'pointer',
        zIndex: '9999',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(139,92,246,0.6)',
        transition: 'all 0.3s',
    });
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseover', () => {
        backToTop.style.background = 'var(--accent)';
        backToTop.style.transform = 'translateY(-3px)';
    });
    backToTop.addEventListener('mouseout', () => {
        backToTop.style.background = 'var(--primary)';
        backToTop.style.transform = 'translateY(0)';
    });
    const heroSection = document.querySelector('.hero');
    if (heroSection) injectParticles(heroSection, 60);

    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        const parentSection = featuredGrid.closest('.section');
        if (parentSection) injectParticles(parentSection, 50);
    }
    const agentsGrid = document.querySelector('.agents-grid');
    if (agentsGrid) {
        const agentsSection = agentsGrid.closest('.section');
        if (agentsSection) injectParticles(agentsSection, 40);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) injectParticles(contactSection, 35);
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        const testimonialsSection = testimonialsGrid.closest('.section');
        if (testimonialsSection) injectParticles(testimonialsSection, 40);
    }
    const whyGrid = document.querySelector('.why-grid');
    if (whyGrid) {
        const whySection = whyGrid.closest('.section');
        if (whySection) injectParticles(whySection, 40);
    }
    const statsSection = document.querySelector('.stats');
    if (statsSection) injectParticles(statsSection, 35);
    const ham = document.getElementById('hamburger');
    if (ham) {
        ham.addEventListener('click', () => {
            document.getElementById('nav-links')?.classList.toggle('open');
        });
    }
    const pageHeader = document.querySelector('.page-header');

    if (pageHeader) {
        injectParticles(pageHeader, 120);
    }
    const productsSection = document.querySelector('.products-layout');

    if (productsSection) {
        injectParticles(productsSection, 80);
    }
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.property-card, .why-card, .agent-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
    const navLinks = document.querySelectorAll('.nav-links a');
    const urlParams = new URLSearchParams(window.location.search);
    const transParam = urlParams.get('trans');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const text = link.textContent.trim().toLowerCase();
        if (transParam === 'vente' && text === 'acheter') {
            link.classList.add('active');
        } else if (transParam === 'location' && text === 'louer') {
            link.classList.add('active');
        } else if (!transParam && window.location.pathname.includes('produits') && text === 'propriétés') {
            link.classList.add('active');
        } else if ((window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) && text === 'accueil') {
            link.classList.add('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const text = this.textContent.trim().toLowerCase();
            const isContentFolder = window.location.pathname.includes('');
            const produitsPath = isContentFolder ? 'produits.html' : 'produits.html';

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (text === 'acheter') {
                e.preventDefault();
                window.location.href = produitsPath + '?trans=vente';
            } else if (text === 'louer') {
                e.preventDefault();
                window.location.href = produitsPath + '?trans=location';
            } else if (text === 'propriétés') {
                e.preventDefault();
                window.location.href = produitsPath;
            }
        });
    });
    function animateCounter(el, target, duration = 2000, suffix = '') {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                el.textContent = target.toLocaleString('fr-FR') + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(start).toLocaleString('fr-FR') + suffix;
            }
        }, 16);
    }

    const statsObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('[data-count]').forEach(el => {
                    animateCounter(el, parseInt(el.dataset.count), 1800, el.dataset.suffix || '');
                });
                statsObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.stats').forEach(el => statsObs.observe(el));
    const fadeObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
                entry.target.classList.add('fade-in');
                fadeObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.why-card, .agent-card, .testimonial-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.dataset.delay = `${i * 0.08}s`;
        fadeObs.observe(el);
    });
    const heroSearchBtn = document.getElementById('hero-search-btn');
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => {
            const type = document.getElementById('hero-type')?.value || '';
            const city = document.getElementById('hero-city')?.value || '';
            const trans = document.getElementById('hero-trans')?.value || '';
            let url = 'produits.html?';
            if (type) url += `type=${type}&`;
            if (city) url += `city=${encodeURIComponent(city)}&`;
            if (trans) url += `trans=${trans}&`;
            window.location.href = url;
        });
    }
    const featGrid = document.getElementById('featured-grid');
    if (featGrid && typeof PROPERTIES !== 'undefined') {
        const featured = PROPERTIES.filter(p => p.featured).slice(0, 6);
        featGrid.innerHTML = featured.map(createPropertyCard).join('');
    }
    const prodsGrid = document.getElementById('properties-grid');
    if (prodsGrid && typeof PROPERTIES !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get('type');
        const transParam2 = params.get('trans');

        if (typeParam) {
            const typeEl = document.getElementById('filter-type');
            if (typeEl) typeEl.value = typeParam;
        }
        if (transParam2) {
            const transEl = document.getElementById('filter-transaction');
            if (transEl) transEl.value = transParam2;
        }

        const priceSlider = document.getElementById('filter-price');
        if (priceSlider) {
            priceSlider.addEventListener('input', updatePriceDisplay);
            updatePriceDisplay();
        }

        document.getElementById('sort-select')?.addEventListener('change', applyFilters);
        applyFilters();
    }
    const commandeForm = document.getElementById('commande-form');
    if (commandeForm && typeof PROPERTIES !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const prop = PROPERTIES.find(p => p.id === parseInt(params.get('id')));

        if (prop) {
            document.getElementById('summary-property').textContent = prop.title;
            document.getElementById('summary-city').textContent = prop.city;
            document.getElementById('summary-price').textContent = prop.priceLabel;
            document.getElementById('summary-type').textContent = prop.transaction === 'vente' ? 'Achat' : 'Location';
        }

        const session = typeof getSession === 'function' ? getSession() : null;
        if (session) {
            [['cmd-prenom', session.prenom], ['cmd-nom', session.nom],
            ['cmd-email', session.email], ['cmd-tel', session.tel]].forEach(([id, val]) => {
                const el = document.getElementById(id);
                if (el && val) el.value = val;
            });
        }

        commandeForm.addEventListener('submit', handleCommande);
    }
});
function handleCommande(e) {
    e.preventDefault();
    const btn = document.getElementById('cmd-btn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Envoi...';

    setTimeout(() => {
        const name = document.getElementById('cmd-prenom')?.value + ' ' + document.getElementById('cmd-nom')?.value;
        document.getElementById('commande-form').style.display = 'none';
        const success = document.getElementById('cmd-success');
        if (success) {
            success.style.display = 'block';
            document.getElementById('success-name').textContent = name;
        }
        const reservations = JSON.parse(localStorage.getItem('immo_reservations') || '[]');
        reservations.push({
            date: new Date().toISOString(),
            name,
            propId: new URLSearchParams(window.location.search).get('id')
        });
        localStorage.setItem('immo_reservations', JSON.stringify(reservations));
    }, 1500);
}
