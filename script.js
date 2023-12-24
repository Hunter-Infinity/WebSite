// hello there person looking in files! have a great day/night!
// mmm coooode

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const isLightMode = localStorage.getItem('isLightMode');
    
    if (isLightMode === 'true') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '🌙';
    }

    mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('isLightMode', isLightMode);
        themeToggle.innerHTML = isLightMode ? '🌙' : '☀️';
    });
});
