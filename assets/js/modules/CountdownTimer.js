window.CountdownTimer = (function () {
    // Вспомогательная функция для склонения
    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : cases[number % 10 < 5 ? number % 10 : 5]
            ];
    }

    function updateTimer() {
        const targetDate = new Date('2026-02-25T00:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        if (!daysEl && !hoursEl && !minutesEl) return;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            // Обновляем числа
            if (daysEl) daysEl.textContent = days;
            if (hoursEl) hoursEl.textContent = hours;
            if (minutesEl) minutesEl.textContent = minutes;

            // Обновляем окончания (если есть соседние элементы с классом .unit)
            const daysUnit = daysEl?.nextElementSibling;
            const hoursUnit = hoursEl?.nextElementSibling;
            const minutesUnit = minutesEl?.nextElementSibling;

            if (daysUnit && daysUnit.classList.contains('unit')) {
                daysUnit.textContent = declOfNum(days, ['день', 'дня', 'дней']);
            }
            if (hoursUnit && hoursUnit.classList.contains('unit')) {
                hoursUnit.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
            }
            if (minutesUnit && minutesUnit.classList.contains('unit')) {
                minutesUnit.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
            }
        } else {
            if (daysEl) daysEl.textContent = '0';
            if (hoursEl) hoursEl.textContent = '0';
            if (minutesEl) minutesEl.textContent = '0';

            // Окончания при нуле
            const daysUnit = daysEl?.nextElementSibling;
            const hoursUnit = hoursEl?.nextElementSibling;
            const minutesUnit = minutesEl?.nextElementSibling;

            if (daysUnit && daysUnit.classList.contains('unit')) daysUnit.textContent = 'дней';
            if (hoursUnit && hoursUnit.classList.contains('unit')) hoursUnit.textContent = 'часов';
            if (minutesUnit && minutesUnit.classList.contains('unit')) minutesUnit.textContent = 'минут';
        }
    }

    return {
        init: () => {
            updateTimer();
            setInterval(updateTimer, 1000);
        }
    };
})();