document.addEventListener('DOMContentLoaded', () => {
    const parallaxBackgrounds = document.querySelectorAll('[data-js-parallax-factor]');

    if (parallaxBackgrounds.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset; // Not used directly in this approach, but good to have

            parallaxBackgrounds.forEach(bg => {
                const section = bg.parentElement;
                if (!section) return;

                const rect = section.getBoundingClientRect();
                // rect.top is the position of the section's top relative to the viewport's top.
                // It's negative when the section has scrolled above the viewport top.
                // It's positive when the section's top is below the viewport top.

                const factor = parseFloat(bg.dataset.jsParallaxFactor) || 0.5;

                // We want the background to move in the same direction as the section scrolls
                // relative to the viewport, but by a scaled amount (factor).
                // If factor = 0.2, background moves 20% of section's scroll.
                // Content moves 100% with the section.
                // The visual parallax is due to the difference: (1 - factor).
                // A smaller factor means a larger difference, thus more pronounced parallax.
                
                // The transform is applied relative to the background's initial position (-20% top).
                // As rect.top decreases (section moves up), we want translateY to also decrease (bg moves up).
                const translateY = rect.top * factor;

                // Check if the section is roughly in view to apply the effect
                // This helps to avoid unnecessary calculations for sections far off-screen.
                // (Though modern browsers are good at optimizing transforms)
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    bg.style.transform = `translateY(${translateY}px)`;
                }
            });
        });
    }

    // console.log('Parallax effect JavaScript updated and loaded.');
});