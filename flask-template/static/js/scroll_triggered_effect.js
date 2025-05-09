document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated-element');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.2 // 20% of item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Special handling for slide-up-reveal paragraphs
                if (entry.target.classList.contains('slide-up-reveal')) {
                    const paragraphs = entry.target.querySelectorAll('p');
                    paragraphs.forEach((p, index) => {
                        setTimeout(() => {
                            p.classList.add('revealed');
                        }, index * 200); // Stagger delay
                    });
                }

                // Special handling for number counter
                if (entry.target.classList.contains('counter-up')) {
                    const numberSpan = entry.target.querySelector('.number-count');
                    if (numberSpan && !numberSpan.classList.contains('counted')) {
                        const target = +numberSpan.dataset.target;
                        animateCount(numberSpan, target);
                        numberSpan.classList.add('counted'); // Prevent re-counting
                    }
                }
                
                // Optional: Unobserve after animation if you don't want it to re-trigger
                // observer.unobserve(entry.target); 
            } else {
                // Optional: Remove class if element goes out of view (for re-triggering on scroll up)
                // entry.target.classList.remove('is-visible');
                // if (entry.target.classList.contains('slide-up-reveal')) {
                //     entry.target.querySelectorAll('p').forEach(p => p.classList.remove('revealed'));
                // }
                // if (entry.target.classList.contains('counter-up')) {
                //      const numberSpan = entry.target.querySelector('.number-count');
                //      if(numberSpan) {
                //          numberSpan.textContent = '0';
                //          numberSpan.classList.remove('counted');
                //      }
                // }
            }
        });
    };

    const animateCount = (element, target) => {
        let current = 0;
        const increment = target / 100; // Adjust for speed/smoothness (100 steps)
        const duration = 1500; // ms
        const stepTime = Math.abs(Math.floor(duration / 100));

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, stepTime);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(el => observer.observe(el));

    // console.log('Scroll-triggered animations JavaScript loaded.');
});