$(document).ready(function(){
    M.updateTextFields();
    $('#formSalud').on('submit', function(e){
        e.preventDefault();
        $('#mensajeExito').fadeIn();
        setTimeout(function(){
            $('#mensajeExito').fadeOut();
            $('#formSalud')[0].reset();
        }, 3500);
    });
});