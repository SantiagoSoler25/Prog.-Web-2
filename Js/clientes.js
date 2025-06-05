document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el sidenav para que funcione el menú lateral
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'left' });

    // Opcional: Si quieres que el menú se abra al hacer clic en el logo (ícono de menú)
    var trigger = document.querySelector('.sidenav-trigger');
    if (trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            instance.open();
        });
    }

    // Puedes poner esto al final del archivo o en ../Js/clientes.js
    document.querySelector('.custom-trigger').addEventListener('click', function() {
        document.getElementById('custom-nav').classList.toggle('show');
    });
    // Opcional: Ocultar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        const nav = document.getElementById('custom-nav');
        const trigger = document.querySelector('.custom-trigger');
        if (!nav.contains(e.target) && !trigger.contains(e.target)) {
            nav.classList.remove('show');
        }
    });
}); 