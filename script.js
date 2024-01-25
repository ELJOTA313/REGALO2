function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;
    var codigoCorrecto = "TEAMOSOFI";
    var contenidoPrincipal = document.getElementById("contenidoPrincipal");
    var videoFondo = document.getElementById("videoFondo");
    var videoPrincipal = document.getElementById("videoPrincipal");

    if (codigoIngresado === codigoCorrecto) {
        // Mostrar el contenido principal y el video principal
        contenidoPrincipal.style.display = "block";
        videoFondo.style.display = "none";
        videoPrincipal.style.display = "block";

        // Habilitar el audio y reproducir el video principal
        videoPrincipal.muted = false;
        videoPrincipal.play();
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
