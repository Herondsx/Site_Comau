document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = searchIcon.parentElement;

    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('active');
        const searchBox = searchContainer.querySelector('.search-box');

        if (searchContainer.classList.contains('active')) {
            searchBox.focus();
        } else {
            searchBox.value = '';
        }
    });
});

function redirectToPage(page) {
    window.location.href = page;
}

function instalar(event) {
    event.preventDefault();
    console.log('Botão Instalar foi clicado');
}
