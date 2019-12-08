var AbrirPopup = document.getElementById('abrir-popup'),
        overlay = document.getElementById('overlay'),
        popUp = document.getElementById('popup'),
        btnCerrarPopUp = document.getElementById('btn-cerrar-popup');

AbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popUp.classList.add('active');
});

btnCerrarPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popUp.classList.remove('active');
});

