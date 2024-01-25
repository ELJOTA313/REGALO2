function mostrarLetras() {
    var codigoIngresado = document.getElementById("codigo").value;
    // Muestra las letras del código a medida que se ingresan
    document.getElementById("codigoMostrado").textContent = codigoIngresado;
}

function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;
    var codigoCorrecto = "melodrama"; // Reemplaza con tu código
    
    if (codigoIngresado === codigoCorrecto) {
        // Desbloquear el video
        document.getElementById("videoFondo").style.opacity = 1;
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
