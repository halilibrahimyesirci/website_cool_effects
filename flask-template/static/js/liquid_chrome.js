// No specific JavaScript is strictly required for the current CSS-based animation
// of the liquid chrome effect. However, this file is kept for potential future enhancements,
// such as mouse interaction or more complex dynamic behavior.

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.chrome-effect-wrapper');
    if (wrapper) {
        // Example: Change SVG filter seed on mouse move for a more dynamic effect
        // This is a simple example and might need performance tuning
        let seed = 0;
        wrapper.addEventListener('mousemove', (e) => {
            const turbulence = document.querySelector('#liquid-chrome feTurbulence');
            if (turbulence) {
                // Changing seed frequently can be performance intensive
                // seed = (seed + 1) % 100; // Simple increment
                // turbulence.setAttribute('seed', seed.toString());

                // A more subtle effect: slightly change baseFrequency based on mouse position
                const rect = wrapper.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                let baseX = 0.01 + (x * 0.01); // vary between 0.01 and 0.02
                let baseY = 0.03 + (y * 0.02); // vary between 0.03 and 0.05

                // turbulence.setAttribute('baseFrequency', `${baseX.toFixed(4)} ${baseY.toFixed(4)}`);
                // Note: Directly manipulating SVG attributes like this on mousemove can be janky.
                // CSS variables or other techniques might be smoother if this interactivity is desired.
            }
        });

        // console.log('Liquid chrome effect JavaScript loaded.');
    }
});

