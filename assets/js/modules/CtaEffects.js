window.CtaEffects = (function () {
    return {
        init: () => {
            document.querySelectorAll('.cta-button, .cta-fixed').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'scale(1.05)';
                    btn.style.boxShadow = '0 0 15px rgba(231, 76, 60, 0.5)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'scale(1)';
                    btn.style.boxShadow = 'none';
                });
            });
        }
    };
})();