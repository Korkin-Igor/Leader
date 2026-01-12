window.SmartHeader = (function () {
    let lastScrollY = 0;
    let isInitialized = false;

    function init() {
        // Запускаем только один раз
        if (isInitialized) return;

        // Проверяем: мобильное устройство?
        if (window.innerWidth > 1010) return;

        const header = document.querySelector('.fixed-header');
        if (!header) return;

        lastScrollY = window.scrollY;
        isInitialized = true;

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    function handleScroll() {
        const currentScroll = window.scrollY;
        const diff = Math.abs(currentScroll - lastScrollY);

        // Игнорируем мелкие колебания (менее 10px)
        if (diff < 100) {
            return;
        }

        if (currentScroll > lastScrollY && currentScroll > 100) {
            // Скроллим вниз → прячем
            document.querySelector('.fixed-header')?.classList.add('hidden');
        } else if (currentScroll < lastScrollY) {
            // Скроллим вверх → показываем
            document.querySelector('.fixed-header')?.classList.remove('hidden');
        }

        lastScrollY = currentScroll;
    }

    // Публичный метод
    return {
        init: init
    };
})();