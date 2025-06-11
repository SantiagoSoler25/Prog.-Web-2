$(document).ready(function(){
    M.updateTextFields();
    $('#formHipoteca').on('submit', function(e){
        e.preventDefault();
        $('#mensajeExito').fadeIn();
        setTimeout(function(){
            $('#mensajeExito').fadeOut();
            $('#formHipoteca')[0].reset();
        }, 3500);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    M.updateTextFields();
});
