$(document).ready(function() {
    $('#form-problema').on('submit', function(e) {
        e.preventDefault();
        M.toast({html: '¡Reporte enviado! Nuestro equipo te contactará pronto.', classes: 'rounded blue darken-3 white-text'});
        $(this).trigger('reset');
    });
});