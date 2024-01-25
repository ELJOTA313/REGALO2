function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;
    var codigoCorrecto = "codigoEjemplo";
    var videoPrincipal = document.getElementById("videoPrincipal");

    if (codigoIngresado === codigoCorrecto) {
        // Habilita el audio y reproduce el video principal
        videoPrincipal.muted = false;
        videoPrincipal.play();
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
