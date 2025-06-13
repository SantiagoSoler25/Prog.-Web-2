$(document).ready(function() {
    $('#form-envio').on('submit', function(e) {
        e.preventDefault();
        const nombre = $('#nombre-envio').val();
        const cedula = $('#cedula-envio').val();
        const monto = parseFloat($('#monto-envio').val());
        const fecha = new Date().toLocaleString();

        const movimiento = {
            tipo: 'Transferencia',
            cedula: cedula,
            nombre: nombre,
            monto: monto,
            fecha: fecha
        };

        let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.push(movimiento);
        localStorage.setItem('movimientos', JSON.stringify(movimientos));

        window.location.href = "movimientos.html";
    });
});