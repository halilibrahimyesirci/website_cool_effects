document.addEventListener('DOMContentLoaded', () => {
    // --- Blur Effect 3: Spoiler Blur --- //
    const spoilers = document.querySelectorAll('.spoiler-text, .spoiler-image-container');

    spoilers.forEach(spoiler => {
        spoiler.addEventListener('click', () => {
            spoiler.classList.remove('blurred');
        });
        // Also allow revealing with Enter key for accessibility
        spoiler.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                spoiler.classList.remove('blurred');
            }
        });
    });

    // --- Blur Effect 5: Lazy Load Image Blur --- //
    const lazyImages = document.querySelectorAll('.lazy-image');

    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const highResSrc = img.getAttribute('data-src');

                if (highResSrc) {
                    // Create a temporary image to load the high-res version
                    const tempImg = new Image();
                    tempImg.src = highResSrc;
                    tempImg.onload = () => {
                        img.src = highResSrc; // Set the src to high-res
                        img.classList.add('loaded'); // Remove blur and scale
                    };
                    tempImg.onerror = () => {
                        console.error(`Failed to load image: ${highResSrc}`);
                        // Optionally, remove blur anyway or show a placeholder error
                        img.classList.add('loaded'); // Or handle error state
                    };
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '0px 0px 100px 0px' }); // Trigger when image is 100px from viewport bottom

    lazyImages.forEach(img => {
        // Pre-load the small blurred image (src is already set in HTML)
        // Then observe for lazy loading the high-res version
        lazyLoadObserver.observe(img);
    });

    // console.log('Blur effects JavaScript loaded.');
});
