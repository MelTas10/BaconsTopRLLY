// Анимация появления панелей при скролле
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    panels.forEach(panel => {
        observer.observe(panel);
    });
});

// Дополнительные эффекты (по желанию)
document.querySelectorAll('.neon-panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        panel.style.transform = 'scale(1.02)';
    });
    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'scale(1)';
    });
});
