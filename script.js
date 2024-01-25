function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;
    
    // Aquí debes verificar el código ingresado con el código correcto
    // Puedes agregar la lógica que desees, por ejemplo, comparando con una cadena fija
    
    var codigoCorrecto = "codigoEjemplo"; // Reemplaza con tu código
    
    if (codigoIngresado === codigoCorrecto) {
        // Desbloquear el video
        document.getElementById("videoFondo").style.opacity = 1;
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
