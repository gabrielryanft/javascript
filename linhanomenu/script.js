document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const barra = document.querySelector('#barra');

    links.forEach(function (link, index) {
        link.addEventListener('click', function () {
            barra.style.left = index * 25 + '%';
        });
    });
});