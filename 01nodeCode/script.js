document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for section navigation
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', (e) => {
            const section = e.target.nextElementSibling;
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add hover effects for lesson cards
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Track lesson progress (basic implementation)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lessonCard = e.target.closest('.lesson-card');
            const lessonTitle = lessonCard.querySelector('h2').textContent;
            
            // Store progress in localStorage
            const progress = JSON.parse(localStorage.getItem('nodeJsProgress') || '{}');
            progress[lessonTitle] = true;
            localStorage.setItem('nodeJsProgress', JSON.stringify(progress));
        });
    });

    // Load and display progress
    const loadProgress = () => {
        const progress = JSON.parse(localStorage.getItem('nodeJsProgress') || '{}');
        Object.keys(progress).forEach(lessonTitle => {
            const lessonCard = Array.from(document.querySelectorAll('.lesson-card h2'))
                .find(h2 => h2.textContent === lessonTitle)
                ?.closest('.lesson-card');
            
            if (lessonCard) {
                lessonCard.style.borderLeft = '5px solid #68a063';
            }
        });
    };

    loadProgress();
});
