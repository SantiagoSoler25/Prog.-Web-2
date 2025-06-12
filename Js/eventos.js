function mostrarError(elemento, mensaje) {
    elemento.addClass("error");
    // Elimina mensajes de error previos
    elemento.closest('.input-field').find('.error-msg').remove();
    elemento.closest('.input-field').append('<span class="error-msg" style="color:red;font-size:0.9em;">' + mensaje + '</span>');
}

function limpiarError(elemento) {
    elemento.removeClass("error");
    elemento.closest('.input-field').find('.error-msg').remove();
}

function validarNit() {
    var elementoNit = $("#txtNit");
    var nit = elementoNit.val();
    var regExp = /^[0-9]{9}\-\d$/;

    limpiarError(elementoNit);

    if (nit.length === 0) {
        mostrarError(elementoNit, "Campo requerido");
        return false;
    }
    if (!regExp.test(nit)) {
        mostrarError(elementoNit, "Formato: 123456789-0");
        return false;
    }
    return true;
}

function validarName() {
    var elementoRazon = $("#txtname");
    var razon = elementoRazon.val();
    var regExp = /^[\w\s]+$/;

    limpiarError(elementoRazon);

    if (razon.length === 0) {
        mostrarError(elementoRazon, "Campo requerido");
        return false;
    }
    if (!regExp.test(razon)) {
        mostrarError(elementoRazon, "Solo letras, números y espacios");
        return false;
    }
    return true;
}

function validarDireccion() {
    var elementoDireccion = $("#txtDireccion");
    var direccion = elementoDireccion.val();
    var regExp = /^[a-zA-Z0-9#\-\s]+$/;

    limpiarError(elementoDireccion);

    if (direccion.length === 0) {
        mostrarError(elementoDireccion, "Campo requerido");
        return false;
    }
    if (!regExp.test(direccion)) {
        mostrarError(elementoDireccion, "Solo letras, números, # y -");
        return false;
    }
    return true;
}

function validarTelefono() {
    var elementoTelefono = $("#telefono");
    var telefono = elementoTelefono.val();
    var regExp = /^\+\d{1,3}([-. ]?\d+)+$/;

    limpiarError(elementoTelefono);

    if (telefono.length === 0) {
        mostrarError(elementoTelefono, "Campo requerido");
        return false;
    }
    if (!regExp.test(telefono)) {
        mostrarError(elementoTelefono, "Formato: +123456789");
        return false;
    }
    return true;
}

function validarEmail() {
    var elementoEmail = $("#email");
    var email = elementoEmail.val();
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    limpiarError(elementoEmail);

    if (email.length === 0) {
        mostrarError(elementoEmail, "Campo requerido");
        return false;
    }
    if (!regExp.test(email)) {
        mostrarError(elementoEmail, "Correo inválido");
        return false;
    }
    return true;
}

function validarDate() {
    var elementoDate = $("#date");
    var date = elementoDate.val();
    var regExp = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;

    limpiarError(elementoDate);

    if (date.length === 0) {
        mostrarError(elementoDate, "Campo requerido");
        return false;
    }
    if (!regExp.test(date)) {
        mostrarError(elementoDate, "Formato: mm/dd/yyyy");
        return false;
    }
    return true;
}

function validarUsuario() {
    var elementoUsuario = $("#usuario");
    var usuario = elementoUsuario.val().trim();

    limpiarError(elementoUsuario);

    if (usuario.length === 0) {
        mostrarError(elementoUsuario, "Campo requerido");
        return false;
    }
    return true;
}

function validarClave() {
    var elementoClave = $("#clave");
    var clave = elementoClave.val().trim();

    limpiarError(elementoClave);

    var tieneMayuscula = /[A-Z]/.test(clave);

    if (clave.length < 8) {
        mostrarError(elementoClave, "Mínimo 8 caracteres");
        return false;
    }
    if (!tieneMayuscula) {
        mostrarError(elementoClave, "Debe contener al menos una mayúscula");
        return false;
    }
    return true;
}
function validarCedula() {
    var elementoCedula = $("#cedula");
    var cedula = elementoCedula.val().trim();
    var regExp = /^[0-9]{6,12}$/;

    limpiarError(elementoCedula);

    if (cedula.length === 0) {
        mostrarError(elementoCedula, "Campo requerido");
        return false;
    }
    if (!regExp.test(cedula)) {
        mostrarError(elementoCedula, "Solo números (6 a 12 dígitos)");
        return false;
    }
    return true;
}
function validarFormulario() {
    var nit = validarNit();
    var razon = validarRazonSocial();
    var direccion = validarDireccion();
    var telefono = validarTelefono();
    var email = validarEmail();
    var date = validarDate();
    var usuario = validarUsuario();
    var clave = validarClave();

    return nit && razon && direccion && telefono && email && date && usuario && clave;
}

function limpiarFormulario() {
    $("#txtNit").val("");
    $("#txtname").val("");
    $("#txtDireccion").val("");
    $("#telefono").val("");
    $("#email").val("");
    $("#date").val("");
    $("#usuario").val("");
    $("#clave").val("");
    $(".error-msg").remove();
    $(".error").removeClass("error");
}

function guardarDatosLogin() {
    var data = {
        usuario: $("#usuario").val(),
        clave: $("#clave").val()
    };
    localStorage.setItem("loginData", JSON.stringify(data));
    limpiarFormulario();
}
function validarFormularioCliente() {
    var nombre = validarName();
    var cedula = validarCedula();
    var email = validarEmail();
    var telefono = validarTelefono();
    return nombre && cedula && email && telefono;
}
function guardarDatosClientes() {
    if (typeof validarFormularioCliente === "function" && !validarFormularioCliente()) return;

    var cliente = {
        nombre: $("#txtname").val(),
        cedula: $("#cedula").val(),
        email: $("#email").val(),
        telefono: $("#telefono").val()
    };

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    alert("Cliente guardado correctamente.");
    limpiarFormulario();
}
function validarFormLoginUser() {
    var usuario = validarUsuario();
    var clave = validarClave();
    return usuario && clave;
}

function guardarDatosLoginUser() {
    if (typeof validarFormLoginUser === "function" && !validarFormLoginUser()) return;

    var loginUser = {
        usuario: $("#usuario").val(),
        clave: $("#clave").val()
    };

    let usuarios = JSON.parse(localStorage.getItem("usuariosLogin")) || [];
    usuarios.push(loginUser);
    localStorage.setItem("usuariosLogin", JSON.stringify(usuarios));

    limpiarFormulario();
}
