var AbrirPopup_crear = document.getElementById('abrir-popup-crear'),
        overlay_crear = document.getElementById('overlay-crear'),
        popUp_crear = document.getElementById('popup-crear'),
        btnCerrarPopUp_crear = document.getElementById('btn-cerrar-popup-crear');

AbrirPopup_crear.addEventListener('click', function () {
    overlay_crear.classList.add('active');
    popUp_crear.classList.add('active');
});

btnCerrarPopUp_crear.addEventListener('click', function (e) {
    e.preventDefault();
    overlay_crear.classList.remove('active');
    popUp_crear.classList.remove('active');
});

