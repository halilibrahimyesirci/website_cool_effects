document.addEventListener('DOMContentLoaded', () => {
    // Basic parallax with CSS (background-attachment: fixed) doesn't require JS.
    // This file is here for potential future enhancements or more complex JS-driven parallax.

    // Example of a simple JS-driven parallax effect (adjust background position on scroll)
    // This would typically be used if 'background-attachment: fixed' is not desired
    // or for more control over multiple layers.

    /*
    const parallaxBackgrounds = document.querySelectorAll('.parallax-bg-js'); // Use a specific class for JS-controlled parallax

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        parallaxBackgrounds.forEach(bg => {
            const speed = parseFloat(bg.getAttribute('data-parallax-speed')) || 0.5;
            const offset = scrollTop * speed;
            bg.style.backgroundPositionY = offset + 'px';
        });
    });
    */

    // console.log('Parallax effect JavaScript loaded.');
});