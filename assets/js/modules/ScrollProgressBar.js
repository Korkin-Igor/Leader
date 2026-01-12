window.ScrollProgressBar = (function () {
    return {
        init: () => {
            const fill = document.querySelector('.progress-fill');
            const percentEl = document.getElementById('progress-percent');
            if (!fill || !percentEl) return;

            const update = () => {
                const total = document.documentElement.scrollHeight - window.innerHeight;
                if (total <= 0) {
                    fill.style.width = '100%';
                    percentEl.textContent = '100';
                    return;
                }
                const scrolled = window.pageYOffset;
                const progress = Math.min(Math.floor((scrolled / total) * 100), 100);
                fill.style.width = `${progress}%`;
                percentEl.textContent = progress;
            };

            update();
            window.addEventListener('scroll', update);
        }
    };
})();