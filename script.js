 // Initialize AOS
        AOS.init({ duration: 800, once: true, offset: 120 });

        // Particles.js configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#2dd4bf' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#2dd4bf', opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
                modes: { repulse: { distance: 100, duration: 0.4 } }
            },
            retina_detect: true
        });

        // Progress bar on scroll
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";

            // Navbar background change
            if (window.scrollY > 50) {
                document.getElementById('desktopNav')?.classList.add('scrolled');
            } else {
                document.getElementById('desktopNav')?.classList.remove('scrolled');
            }
        };

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        menuToggle?.addEventListener('click', () => mobileMenu.classList.add('active'));
        closeMenu?.addEventListener('click', () => mobileMenu.classList.remove('active'));
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });

        // Portfolio filter
        const filterTabs = document.querySelectorAll('.filter-tab');
        const galleryItems = document.querySelectorAll('.gallery-item');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const filter = tab.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Contact form submission with loader
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const loader = document.getElementById('loader');
            const msg = document.getElementById('responseMessage');
            btn.disabled = true;
            loader.style.display = 'inline-block';
            msg.textContent = '';
            // Simulate sending
            setTimeout(() => {
                loader.style.display = 'none';
                btn.disabled = false;
                msg.style.color = '#2dd4bf';
                msg.textContent = 'Message sent successfully!';
                this.reset();
            }, 1500);
        });

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
