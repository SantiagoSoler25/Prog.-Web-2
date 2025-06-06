  const clientes = [];

        $('#clienteForm').on('submit', function(e) {
            e.preventDefault();
            const nombre = $('#nombre').val().trim();
            const cedula = $('#cedula').val().trim();
            const email = $('#email').val().trim();
            const telefono = $('#telefono').val().trim();

            if (!nombre || !cedula || !email || !telefono) {
                M.toast({html: 'Por favor, completa todos los campos.'});
                return;
            }

            if (!/^[0-9]{6,12}$/.test(cedula)) {
                M.toast({html: 'Cédula inválida.'});
                return;
            }
            if (!/^[0-9]{7,10}$/.test(telefono)) {
                M.toast({html: 'Teléfono inválido.'});
                return;
            }

            clientes.push({ nombre, cedula, email, telefono });
            actualizarTabla();
            this.reset();
            M.updateTextFields();
            M.toast({html: 'Cliente registrado exitosamente.'});
        });

        function actualizarTabla() {
            const tbody = $('#clientesTabla');
            tbody.empty();
            clientes.forEach(c => {
                tbody.append(`<tr>
                    <td>${c.nombre}</td>
                    <td>${c.cedula}</td>
                    <td>${c.email}</td>
                    <td>${c.telefono}</td>
                </tr>`);
            });
        }