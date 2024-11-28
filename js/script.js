// isso aqui deixa o site com modo claro e escuro
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Carregar a preferência de modo do usuário
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Alternar ícones de sol e lua
        if (document.body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('mode', 'dark');
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('mode', 'light');
        }
    });
});