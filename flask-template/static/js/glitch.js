document.addEventListener('DOMContentLoaded', () => {
    const glitchTexts = document.querySelectorAll('.glitch-text');

    glitchTexts.forEach(textElement => {
        // Could add JavaScript to dynamically change the data-text attribute 
        // or to trigger glitches on hover/click for more interactivity.
        // For now, CSS handles the continuous animation.
    });

    const imageWrappers = document.querySelectorAll('.glitch-wrapper img.glitch-image');
    // Similar to text, JS can be used to make image glitches more dynamic or interactive.
    // For example, randomizing clip-path polygons or animation timings.

    // console.log('Glitch effect JavaScript loaded.');

    // More advanced: Randomize glitch animation timings slightly for less repetitive effect
    function randomizeGlitchAnimations() {
        const allGlitchElements = document.querySelectorAll('.glitch-text, .glitch-image');
        allGlitchElements.forEach(el => {
            const currentAnimation = el.style.animation;
            if (currentAnimation) {
                // This is a naive way, might need to parse existing animations properly
                // For simplicity, let's assume we just add a random delay
                const randomDelay = Math.random() * 0.5; // up to 0.5s delay
                // el.style.animationDelay = `${randomDelay.toFixed(2)}s`;
                // Note: Directly setting animationDelay might not work as expected if animations are already running
                // or defined in CSS. A better approach would be to restart animations or manage them via JS classes.
            }
        });
    }

    // Call it once, or set an interval for more dynamic changes (can be performance heavy)
    // randomizeGlitchAnimations(); 
});
