document.addEventListener('DOMContentLoaded', () => {
    const effectArea = document.querySelector('.cursor-effect-area');
    const pageBody = document.body; // Apply to whole body or a specific area

    // Simple Dot Trail Effect
    const createDotTrail = (targetElement) => {
        if (!targetElement) return;

        targetElement.addEventListener('mousemove', (e) => {
            const dot = document.createElement('div');
            dot.classList.add('trail-dot');
            
            // Position the dot at the cursor
            // If targetElement is the body, clientX/Y is fine.
            // If targetElement is a specific div, pageX/Y or adjusting clientX/Y with getBoundingClientRect() is better.
            let xPosition = e.pageX;
            let yPosition = e.pageY;

            // If the effectArea is the target, adjust for its offset and scroll
            if (targetElement === effectArea) {
                 xPosition = e.clientX - effectArea.getBoundingClientRect().left + effectArea.scrollLeft;
                 yPosition = e.clientY - effectArea.getBoundingClientRect().top + effectArea.scrollTop;
                 dot.style.left = `${xPosition}px`;
                 dot.style.top = `${yPosition}px`;
                 effectArea.appendChild(dot); // Append to the effect area
            } else {
                // If target is body, use pageX/Y directly
                dot.style.left = `${xPosition}px`;
                dot.style.top = `${yPosition}px`;
                pageBody.appendChild(dot); // Append to body
            }


            // Make the dot fade and disappear
            setTimeout(() => {
                dot.style.opacity = '0';
                dot.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Optional: shrink
            }, 100); // Start fading quickly

            setTimeout(() => {
                dot.remove();
            }, 600); // Remove from DOM after fade (500ms transition + 100ms buffer)
        });
    };

    // Initialize the dot trail on the designated area or whole body
    // createDotTrail(effectArea); // To confine to the .cursor-effect-area
    createDotTrail(pageBody); // To apply to the whole page body for wider effect

    // console.log('Cursor trail effect JavaScript loaded.');

    // --- Spotlight Effect (Alternative or Additional) ---
    // This would typically replace or complement the dot trail.
    /*
    const spotlightContainer = document.querySelector('.spotlight-container'); // Assuming you have this in HTML
    if (spotlightContainer) {
        spotlightContainer.addEventListener('mousemove', (e) => {
            const rect = spotlightContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            spotlightContainer.style.setProperty('--mouse-x', `${x}px`);
            spotlightContainer.style.setProperty('--mouse-y', `${y}px`);
        });
    }
    */
});