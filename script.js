// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple animation for project cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Additional animation for flower elements
document.addEventListener('DOMContentLoaded', function() {
    // Randomly rotate flowers a bit on page load for natural look
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        const randomRotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
        flower.style.transform = `rotate(${randomRotation}deg)`;
        
        // Add a slight wiggle animation on hover near the tagline
        document.querySelector('.tagline-container').addEventListener('mousemove', () => {
            flowers.forEach(flower => {
                const smallRandomMovement = (Math.random() * 5 - 2.5) / 2;
                flower.style.transform = `rotate(${randomRotation + smallRandomMovement}deg)`;
            });
        });
    });
});