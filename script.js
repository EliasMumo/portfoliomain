document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const t = document.querySelector(href);
            if (t) t.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Nav shadow on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.style.boxShadow = window.pageYOffset > 40
                ? '0 4px 30px rgba(0,0,0,0.6)' : 'none';
        }
    });

    // Active nav link
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const pos = window.pageYOffset + 100;
        let id = '';
        sections.forEach(s => {
            if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
                id = s.getAttribute('id');
            }
        });
        links.forEach(l => {
            l.style.color = '';
            if (l.getAttribute('href') === '#' + id) l.style.color = 'var(--purple-light)';
        });
    });
});
