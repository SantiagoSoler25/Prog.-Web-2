document.addEventListener('DOMContentLoaded', function() {
    M.updateTextFields();

    const form = document.getElementById('form-retiro');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const cedula = document.getElementById('cedula-retiro').value;
            const nombre = document.getElementById('nombre-retiro').value;
            const monto = document.getElementById('monto-retiro').value;
            const fecha = new Date().toLocaleString();
            const movimiento = {
                tipo: 'Retiro',
                cedula: cedula,
                nombre: nombre,
                monto: parseFloat(monto),
                fecha: fecha
            };

            let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
            movimientos.push(movimiento);
            localStorage.setItem('movimientos', JSON.stringify(movimientos));

            window.location.href = 'movimientos.html';
        });
    }
});
