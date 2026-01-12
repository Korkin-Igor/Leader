window.ScrollAnimations = (function () {
    function initLogoAnimations() {
        const elements = document.querySelectorAll('.partner-logo');
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('animate');
            } else {
                observer.observe(el);
            }
        });
    }

    return {
        init: () => {
            initLogoAnimations();
        }
    };
})();