const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('features') ||
                entry.target.classList.contains('ai-section') ||
                entry.target.classList.contains('rooms-section')) {
                const cards = entry.target.querySelectorAll('.feature-card, .ai-feature, .room-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150);
                });
            }
        }
    });
},{
    threshold: 0.2,
    rootMargin: '-50px 0px -100px 0px'
});

document.querySelectorAll('.features, .ai-section, .rooms-section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

document.querySelectorAll('button, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});