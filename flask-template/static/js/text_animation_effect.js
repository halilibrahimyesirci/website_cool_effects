document.addEventListener('DOMContentLoaded', () => {
    // --- Typing Effect ---
    function typeAnimation(elementSelector) {
        const element = document.querySelector(elementSelector);
        if (!element) return;

        const textToType = element.dataset.textToType || "Default text to type.";
        let currentText = '';
        let i = 0;
        element.innerHTML = ''; // Clear previous text

        // Clear existing cursor if any from previous runs
        if (element.style.borderRight !== '') {
            element.style.borderRight = '0.1em solid var(--accent-color)';
        }


        function type() {
            if (i < textToType.length) {
                currentText += textToType.charAt(i);
                element.innerHTML = currentText.replace(/ /g, '\u00A0'); // Preserve spaces
                i++;
                setTimeout(type, Math.random() * 100 + 50); // Random typing speed
            } else {
                // Optionally remove cursor blinking after typing is done
                // element.style.borderRight = 'none';
            }
        }
        type();
    }

    // --- Text Reveal (Fade & Slide In) ---
    function revealAnimation(elementSelector, animationClass = 'revealed') {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length === 0) return;

        elements.forEach(el => el.classList.remove(animationClass)); // Reset

        elements.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add(animationClass);
            }, index * 100); // Stagger the animation
        });
    }

    // --- Text Line Slide Up ---
    function slideUpAnimation(elementSelector, animationClass = 'slid-up') {
        const lines = document.querySelectorAll(elementSelector);
        if (lines.length === 0) return;

        lines.forEach(line => line.classList.remove(animationClass)); // Reset

        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add(animationClass);
            }, index * 200); // Stagger the animation for each line
        });
    }
    
    // Initial animations
    typeAnimation('.typing-text');
    revealAnimation('.reveal-text .reveal-char');
    slideUpAnimation('.slide-up-text');

    // Restart Animation Buttons
    const restartButtons = document.querySelectorAll('.btn-restart-animation');
    restartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSelector = button.dataset.targetSelector;
            const animationClass = button.dataset.animationClass;

            if (targetSelector.includes('.typing-text')) {
                typeAnimation(targetSelector);
            } else if (targetSelector.includes('.reveal-char')) {
                revealAnimation(targetSelector, animationClass);
            } else if (targetSelector.includes('.slide-up-text')) {
                slideUpAnimation(targetSelector, animationClass);
            }
        });
    });

    // console.log('Text animation effect JavaScript loaded.');
});