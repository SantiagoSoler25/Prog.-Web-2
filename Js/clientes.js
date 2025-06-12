document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'left' });
    var trigger = document.querySelector('.sidenav-trigger');
    if (trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            instance.open();
        });
    }
    document.querySelector('.custom-trigger').addEventListener('click', function() {
        document.getElementById('custom-nav').classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        const nav = document.getElementById('custom-nav');
        const trigger = document.querySelector('.custom-trigger');
        if (!nav.contains(e.target) && !trigger.contains(e.target)) {
            nav.classList.remove('show');
        }
    });
});

$(document).ready(function() {
    M.updateTextFields();

    $('#clienteForm').on('submit', function(e) {
        e.preventDefault();

        // Limpiar mensajes de error previos
        $('.error-msg').remove();

        const nombre = $('#nombre').val().trim();
        const cedula = $('#cedula').val().trim();
        const email = $('#email').val().trim();
        const telefono = $('#telefono').val().trim();

        let valido = true;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const telefonoRegex = /^\+\d{1,3}([-. ]?\d+)+$/;

        // Validación de campos vacíos y formatos
        if (!nombre) {
            $('#nombre').closest('.input-field').append('<span class="error-msg error">Campo requerido</span>');
            valido = false;
        }
        if (!cedula) {
            $('#cedula').closest('.input-field').append('<span class="error-msg error">Campo requerido</span>');
            valido = false;
        } else if (!/^[0-9]+$/.test(cedula)) {
            $('#cedula').closest('.input-field').append('<span class="error-msg error">Solo números</span>');
            valido = false;
        }
        if (!email) {
            $('#email').closest('.input-field').append('<span class="error-msg error">Campo requerido</span>');
            valido = false;
        } else if (!emailRegex.test(email)) {
            $('#email').closest('.input-field').append('<span class="error-msg error">Correo inválido</span>');
            valido = false;
        }
        if (!telefono) {
            $('#telefono').closest('.input-field').append('<span class="error-msg error">Campo requerido</span>');
            valido = false;
        } else if (!telefonoRegex.test(telefono)) {
            $('#telefono').closest('.input-field').append('<span class="error-msg error">Formato: +123456789</span>');
            valido = false;
        }

        if (!valido) return;

        // Guardar en localStorage
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.push({ nombre, cedula, email, telefono });
        localStorage.setItem('clientes', JSON.stringify(clientes));

        M.toast({html: 'Cliente registrado exitosamente.', classes: 'green'});
        this.reset();
        M.updateTextFields();
    });
});