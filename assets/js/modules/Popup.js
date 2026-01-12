window.Popup = (function () {

    function startTimer(timerEl, popupEl) {
        let timeLeft = 15;
        timerEl.textContent = timeLeft;
        const interval = setInterval(() => {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(interval);
                if (popupEl) popupEl.style.display = 'none';
            }
        }, 60000);
    }

    return {
        init: () => {
            const popup = document.getElementById('popup');
            if (!popup) return;

            // Показ через 50 сек
            setTimeout(() => {
                popup.style.display = 'flex';
                const timerEl = document.getElementById('popup-timer');
                if (timerEl) startTimer(timerEl, popup);
            }, 50000);

            // Закрытие
            const closeBtn = popup.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    popup.style.display = 'none';
                });
            }
        }
    };
})();