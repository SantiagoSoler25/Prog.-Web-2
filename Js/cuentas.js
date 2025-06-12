$(document).ready(function() {
    $('select').formSelect();

    // Cambia el texto del botón según el tipo de cuenta
    $('#tipo-cuenta').on('change', function() {
        const tipo = $(this).val();
        if (tipo === 'credito') {
            $('#btn-cuenta').text('Enviar Solicitud');
        } else {
            $('#btn-cuenta').text('Crear Cuenta');
        }
    });

    // Enviar formulario
    $('#form-cuenta').on('submit', function(e) {
        e.preventDefault();
        $('#form-cuenta').hide();
        $('#mensaje-exito').fadeIn();
    });
});