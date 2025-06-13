document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.getElementById('tabla-movimientos');
    let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
    movimientos.reverse(); // Más reciente primero

    function renderTabla() {
        tabla.innerHTML = `
            <table class="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tipo</th>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Monto</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        movimientos.map((mov, idx) => {
                            let fecha = mov.fecha || '';
                            let partes = fecha.split(',');
                            let fechaSolo = partes[0] ? partes[0].trim() : '';
                            let horaSolo = partes[1] ? partes[1].trim() : '';
                            return `
                                <tr>
                                    <td>${idx + 1}</td>
                                    <td>${mov.tipo || ''}</td>
                                    <td>${mov.cedula || ''}</td>
                                    <td>${mov.nombre || ''}</td>
                                    <td>${fechaSolo}</td>
                                    <td>${horaSolo}</td>
                                    <td>$${mov.monto !== undefined ? mov.monto.toFixed(2) : ''}</td>
                                    <td>
                                        <button class="btn-small red darken-2 white-text btn-eliminar" data-idx="${idx}">
                                            <i class="material-icons" style="font-size:1.1rem;">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            `;
                        }).join('')
                    }
                </tbody>
            </table>
        `;

        // Asigna eventos a los botones de eliminar
        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-idx'));
                // Elimina el movimiento correspondiente (recuerda que la lista está invertida)
                movimientos.splice(idx, 1);
                // Guarda la lista invertida de nuevo en el orden original
                localStorage.setItem('movimientos', JSON.stringify([...movimientos].reverse()));
                renderTabla();
            });
        });
    }

    if (tabla) {
        renderTabla();
    }
});