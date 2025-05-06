// Плавное появление блоков при скролле
document.addEventListener('DOMContentLoaded', () => {
    const infoBoxes = document.querySelectorAll('.info-box, .social-buttons');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    infoBoxes.forEach(box => {
        observer.observe(box);
    });
});
