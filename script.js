function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;

    // Cambia "tuCodigoSecreto" por el código que desees utilizar
    if (codigoIngresado === "TEAMOSOFI") {
        document.getElementById("formulario").style.display = "none";
        document.getElementById("video-container").style.display = "block";
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}