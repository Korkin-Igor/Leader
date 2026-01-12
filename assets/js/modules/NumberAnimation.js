// NumberAnimation.js — анимация чисел в разных секциях
window.NumberAnimation = (function () {
    let casesAnimated = false;
    let aboutAnimated = false;

    // Анимация чисел в секции "Кейсы"
    function animateCasesNumbers() {
        if (casesAnimated) return;
        const numbers = document.querySelectorAll('#cases .stat-number[data-number]');
        if (numbers.length === 0) return;

        numbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-number'), 10);
            if (isNaN(target)) return;

            let current = 0;
            const stepTime = 30;
            const steps = Math.ceil(2000 / stepTime);
            const stepValue = target / steps;

            const interval = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    clearInterval(interval);
                    el.textContent = target;
                } else {
                    el.textContent = Math.floor(current);
                }
            }, stepTime);
        });
        casesAnimated = true;
    }

    // Анимация чисел в секции "О нас"
    function animateAboutNumbers() {
        if (aboutAnimated) return;
        const numbers = document.querySelectorAll('#about .stat-number[data-number]');
        if (numbers.length === 0) return;

        numbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-number'), 10);
            if (isNaN(target)) return;

            let current = 0;
            const stepTime = 30;
            const steps = Math.ceil(2000 / stepTime);
            const stepValue = target / steps;

            const interval = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    clearInterval(interval);
                    el.textContent = target;
                } else {
                    el.textContent = Math.floor(current);
                }
            }, stepTime);
        });
        aboutAnimated = true;
    }

    // Проверяем, видна ли секция "Кейсы"
    function checkCasesSection() {
        const section = document.getElementById('cases');
        if (!section || casesAnimated) return;

        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) animateCasesNumbers();
    }

    // Проверяем, видна ли секция "О нас"
    function checkAboutSection() {
        const section = document.getElementById('about');
        if (!section || aboutAnimated) return;

        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) animateAboutNumbers();
    }

    return {
        init: () => {
            // Запускаем проверку при загрузке и при скролле
            checkCasesSection();
            checkAboutSection();

            window.addEventListener('scroll', checkCasesSection);
            window.addEventListener('scroll', checkAboutSection);
        }
    };
})();