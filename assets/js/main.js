document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем все модули
    if (typeof window.CountdownTimer !== 'undefined') CountdownTimer.init();
    if (typeof window.NumberAnimation !== 'undefined') NumberAnimation.init();
    if (typeof window.Popup !== 'undefined') Popup.init();
    if (typeof window.CtaEffects !== 'undefined') CtaEffects.init();
    if (typeof window.ScrollProgressBar !== 'undefined') ScrollProgressBar.init();
    if (typeof window.ScrollAnimations !== 'undefined') ScrollAnimations.init();
    if (typeof window.SmartHeader !== 'undefined') SmartHeader.init();
});