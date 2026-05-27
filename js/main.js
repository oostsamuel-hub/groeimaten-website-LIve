/* =============================================
   MAIN JS — Groeimaten
   ============================================= */

(function () {
    'use strict';

    /* ---- NAV: Scroll behavior ---- */
    const nav = document.getElementById('nav');
    let lastScrollY = 0;

    function updateNav() {
        const scrollY = window.scrollY;
        if (scrollY > 80) {
            nav.classList.add('scrolled');
            // Restore logo dark mode
            const logoText = nav.querySelector('.logo-text');
            if (logoText) logoText.style.color = '';
        } else {
            nav.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // Run on init


    /* ---- NAV: Mobile hamburger ---- */
    const burger = document.getElementById('navBurger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('mobile-open');
            burger.classList.toggle('open', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('mobile-open');
                burger.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }


    /* ---- SCROLL REVEAL: Intersection Observer ---- */
    const revealElements = document.querySelectorAll('.reveal-up');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all immediately
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }


    /* ---- COUNTER ANIMATION ---- */
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const startValue = 0;

        function update(timestamp) {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startValue + (target - startValue) * eased);
            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    const statNumbers = document.querySelectorAll('.stat-card__number[data-count]');

    if ('IntersectionObserver' in window && statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseInt(el.getAttribute('data-count'), 10);
                        animateCounter(el, target, 1800);
                        counterObserver.unobserve(el);
                    }
                });
            },
            { threshold: 0.4 }
        );

        statNumbers.forEach(function (el) {
            counterObserver.observe(el);
        });
    }


    /* ---- FAQ ACCORDION ---- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-item__question');
        const answer = item.querySelector('.faq-item__answer');

        if (!question || !answer) return;

        question.addEventListener('click', function () {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close all open items first
            faqItems.forEach(function (otherItem) {
                const otherQuestion = otherItem.querySelector('.faq-item__question');
                const otherAnswer = otherItem.querySelector('.faq-item__answer');
                if (otherQuestion && otherAnswer && otherItem !== item) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.classList.remove('open');
                }
            });

            // Toggle current
            if (isExpanded) {
                question.setAttribute('aria-expanded', 'false');
                answer.classList.remove('open');
            } else {
                question.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });


    /* ---- SMOOTH SCROLL for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // nav height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });


    /* ---- ACTIVE NAV LINK on scroll ---- */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

    if (sections.length && navAnchors.length) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navAnchors.forEach(function (anchor) {
                            anchor.classList.remove('active');
                        });
                        const id = entry.target.id;
                        const active = document.querySelector('.nav__links a[href="#' + id + '"]');
                        if (active) active.classList.add('active');
                    }
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    /* ---- THEME TOGGLE (licht / donker) ---- */
    var THEME_KEY = 'groeimaten-theme';
    var html = document.documentElement;

    // Pas thema toe op basis van opgeslagen voorkeur of systeemvoorkeur
    function applyTheme(theme) {
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
        } else {
            html.removeAttribute('data-theme');
        }
        localStorage.setItem(THEME_KEY, theme);
    }

    // Initialiseer bij laden
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    }

    // Koppel toggle-knoppen (meerdere pagina's)
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var current = html.getAttribute('data-theme');
            applyTheme(current === 'light' ? 'dark' : 'light');
        });
    });


    /* ---- LOGO STRIP: Progressive blur + hover speed ---- */
    (function () {
        var LAYERS = 8;
        var BLUR_INTENSITY = 0.9; // px per laag

        function buildProgressiveBlur(container, direction) {
            // direction: 'left' (270deg) of 'right' (90deg)
            var angle = direction === 'left' ? 270 : 90;
            var segSize = 1 / (LAYERS + 1);

            for (var i = 0; i < LAYERS; i++) {
                var positions = [i, i + 1, i + 2, i + 3].map(function (p) {
                    return p * segSize;
                });

                var stops = positions.map(function (pos, idx) {
                    var alpha = (idx === 1 || idx === 2) ? 1 : 0;
                    return 'rgba(255,255,255,' + alpha + ') ' + (pos * 100).toFixed(1) + '%';
                }).join(', ');

                var gradient = 'linear-gradient(' + angle + 'deg, ' + stops + ')';
                var blurPx = (i * BLUR_INTENSITY).toFixed(2) + 'px';

                var div = document.createElement('div');
                div.className = 'logo-blur-layer';
                div.style.backdropFilter = 'blur(' + blurPx + ')';
                div.style.webkitBackdropFilter = 'blur(' + blurPx + ')';
                div.style.maskImage = gradient;
                div.style.webkitMaskImage = gradient;
                container.appendChild(div);
            }
        }

        var blurLeft  = document.querySelector('.logo-blur--left');
        var blurRight = document.querySelector('.logo-blur--right');
        if (blurLeft)  buildProgressiveBlur(blurLeft,  'left');
        if (blurRight) buildProgressiveBlur(blurRight, 'right');

        // Hover: vertraag de slider
        var track = document.getElementById('logoTrack');
        if (track) {
            track.addEventListener('mouseenter', function () {
                track.style.animationDuration = '80s';
            });
            track.addEventListener('mouseleave', function () {
                track.style.animationDuration = '30s';
            });
        }
    }());


    /* ---- POSTHOG: Custom event tracking ---- */
    if (typeof window.posthog !== 'undefined') {

        // CTA-knop clicks (alle primaire knoppen)
        document.querySelectorAll('.btn--blue, .btn--primary, .nav__cta').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var label = (btn.textContent || '').trim().replace(/\s+/g, ' ');
                var section = '';
                var parent = btn.closest('section, header, nav, footer');
                if (parent) section = parent.id || parent.className.split(' ')[0] || '';

                window.posthog.capture('cta_clicked', {
                    button_text: label,
                    button_section: section,
                    page: window.location.pathname,
                    button_href: btn.getAttribute('href') || null,
                });
            });
        });

        // FAQ-vraag geopend
        document.querySelectorAll('.faq-item__question').forEach(function (q) {
            q.addEventListener('click', function () {
                var label = (q.textContent || '').trim().replace(/\s+/g, ' ');
                window.posthog.capture('faq_opened', {
                    question: label,
                    page: window.location.pathname,
                });
            });
        });

        // Contactformulier verzonden
        var contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function () {
                window.posthog.capture('contact_form_submitted', {
                    page: window.location.pathname,
                });
            });
        }

        // Scroll depth: 25% / 50% / 75% / 100%
        var scrollMilestones = [25, 50, 75, 100];
        var reached = {};
        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY + window.innerHeight;
            var total = document.documentElement.scrollHeight;
            var pct = Math.round((scrolled / total) * 100);
            scrollMilestones.forEach(function (m) {
                if (pct >= m && !reached[m]) {
                    reached[m] = true;
                    window.posthog.capture('scroll_depth', {
                        depth_percent: m,
                        page: window.location.pathname,
                    });
                }
            });
        }, { passive: true });
    }

})();


/* ============================================
   WERKWIJZE V2 — Interactief Accordion
   ============================================ */
(function () {
    var steps = document.querySelectorAll('.ww2__step');
    var panels = document.querySelectorAll('.ww2__panel');
    if (!steps.length) return;

    steps.forEach(function (step, i) {
        step.addEventListener('click', function () {
            steps.forEach(function (s) {
                s.classList.remove('ww2__step--active');
                s.setAttribute('aria-selected', 'false');
            });
            panels.forEach(function (p) {
                p.classList.remove('ww2__panel--active');
            });
            step.classList.add('ww2__step--active');
            step.setAttribute('aria-selected', 'true');
            var panel = document.querySelector('[data-ww-panel="' + i + '"]');
            if (panel) panel.classList.add('ww2__panel--active');
        });
    });
})();


/* ============================================
   CASES SLIDER
   ============================================ */
(function () {
    var cases = [
        {
            tag: 'Website + Meta Ads',
            name: 'Stoop Keukens',
            desc: 'Complete website redesign en doorlopende Meta Ads campagne. Van incidentele aanvragen naar een stabiele stroom kwalitatieve showroomafspraken.',
            stat1: { num: '+500%', label: 'Meer afspraken' },
            stat2: { num: '82%', label: 'Show-up rate' },
            imgLabel: 'Stoop Keukens — website screenshot',
            imgSrc: 'images/founders-strategy.jpg',
            imgPreviewLabel: 'Tegro',
            imgPreviewSrc: 'images/founders-laptop.jpg'
        },
        {
            tag: 'SEO + Meta Ads',
            name: 'Tegro',
            desc: 'Lokale SEO en gerichte advertentiecampagnes voor een tegelbedrijf. Meer zichtbaarheid in de regio en kwalitatieve aanvragen.',
            stat1: { num: '+180%', label: 'Meer aanvragen' },
            stat2: { num: 'Top 3', label: 'Google rankings' },
            imgLabel: 'Tegro — campagne resultaten',
            imgSrc: 'images/founders-laptop.jpg',
            imgPreviewLabel: 'Marquardt',
            imgPreviewSrc: 'images/founders-working.jpg'
        },
        {
            tag: 'Website + SEO',
            name: 'Marquardt Amersfoort',
            desc: 'Nieuwe website en SEO-strategie voor een premium keukenshowroom. Hogere zichtbaarheid en meer showroombezoeken.',
            stat1: { num: '+210%', label: 'Organisch verkeer' },
            stat2: { num: '+65%', label: 'Showroombezoeken' },
            imgLabel: 'Marquardt — website',
            imgSrc: 'images/founders-working.jpg',
            imgPreviewLabel: 'Stoop Keukens',
            imgPreviewSrc: 'images/founders-strategy.jpg'
        }
    ];

    var activeIndex = 0;

    var tagEl      = document.getElementById('csTag');
    var nameEl     = document.getElementById('csName');
    var descEl     = document.getElementById('csDesc');
    var stat1Num   = document.getElementById('csStat1Num');
    var stat1Label = document.getElementById('csStat1Label');
    var stat2Num   = document.getElementById('csStat2Num');
    var stat2Label = document.getElementById('csStat2Label');
    var imgLabel   = document.getElementById('csImgLabel');
    var imgPreviewLabel = document.getElementById('csImgPreviewLabel');
    var mainImg    = document.getElementById('csMainImg');
    var previewImg = document.getElementById('csPreviewImg');
    var metaEl     = document.getElementById('csMeta');
    var dots       = document.querySelectorAll('[data-cs-dot]');
    var prevBtn    = document.getElementById('csPrev');
    var nextBtn    = document.getElementById('csNext');

    if (!tagEl) return;

    function update(index) {
        var c = cases[index];
        if (metaEl) metaEl.style.opacity = '0';

        setTimeout(function () {
            if (tagEl) tagEl.textContent = c.tag;
            if (nameEl) nameEl.textContent = c.name;
            if (descEl) descEl.textContent = c.desc;
            if (stat1Num) stat1Num.textContent = c.stat1.num;
            if (stat1Label) stat1Label.textContent = c.stat1.label;
            if (stat2Num) stat2Num.textContent = c.stat2.num;
            if (stat2Label) stat2Label.textContent = c.stat2.label;
            if (imgLabel) imgLabel.textContent = c.imgLabel;
            if (imgPreviewLabel) imgPreviewLabel.textContent = c.imgPreviewLabel;
            if (mainImg) { mainImg.src = c.imgSrc; mainImg.alt = c.imgLabel; }
            if (previewImg) { previewImg.src = c.imgPreviewSrc; previewImg.alt = c.imgPreviewLabel; }
            if (metaEl) metaEl.style.opacity = '1';
        }, 180);

        dots.forEach(function (dot, i) {
            dot.classList.toggle('cs-dot--active', i === index);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            activeIndex = (activeIndex - 1 + cases.length) % cases.length;
            update(activeIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            activeIndex = (activeIndex + 1) % cases.length;
            update(activeIndex);
        });
    }

    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            activeIndex = i;
            update(i);
        });
    });
})();


/* ============================================
   REVIEWS MARQUEE — Dupliceer voor naadloze loop
   ============================================ */
(function () {
    var track = document.getElementById('reviewsTrack');
    if (!track) return;
    track.innerHTML += track.innerHTML;
})();


/* ============================================
   VOOR EN NA — Before/After sleep slider
   ============================================ */
(function () {
    document.querySelectorAll('.vn-card__comparison').forEach(function (card) {
        var beforeEl = card.querySelector('.vn-card__before');
        var handleEl = card.querySelector('.vn-card__handle');
        var dragging = false;

        function setPos(clientX) {
            var rect = card.getBoundingClientRect();
            var pct = Math.max(5, Math.min(95, (clientX - rect.left) / rect.width * 100));
            if (beforeEl) beforeEl.style.clipPath = 'inset(0 ' + (100 - pct).toFixed(1) + '% 0 0)';
            if (handleEl) handleEl.style.left = pct.toFixed(1) + '%';
        }

        card.addEventListener('mousedown', function (e) { dragging = true; setPos(e.clientX); });
        document.addEventListener('mousemove', function (e) { if (dragging) setPos(e.clientX); });
        document.addEventListener('mouseup', function () { dragging = false; });

        card.addEventListener('touchstart', function (e) { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
        card.addEventListener('touchmove', function (e) { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
        card.addEventListener('touchend', function () { dragging = false; });
    });
})();
