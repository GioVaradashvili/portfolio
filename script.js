document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active'); 
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const imageContainer = card.querySelector('.project-image-container');

        if (imageContainer) {
            card.addEventListener('mouseenter', () => {
                const colors = [
                    '0, 171, 60',   
                    '255, 255, 255', 
                    '170, 170, 170'  
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                imageContainer.style.boxShadow = `
                    0 0 15px rgba(${randomColor}, 0.8), 
                    0 0 30px rgba(${randomColor}, 0.4)`;
                
                imageContainer.style.transition = 'box-shadow 0.5s ease-in-out';
            });

            card.addEventListener('mouseleave', () => {
                imageContainer.style.boxShadow = 'none';
            });
        }
    });
});