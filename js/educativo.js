$(document).ready(function(){
    M.updateTextFields();
    $('#formEducativo').on('submit', function(e){
        e.preventDefault();
        $('#mensajeExito').fadeIn();
        setTimeout(function(){
            $('#mensajeExito').fadeOut();
            $('#formEducativo')[0].reset();
        }, 3500);
    });
});