function calcular() {
    let num1 = parseInt(document.getElementById("exponente").value);

    let resultado = num1 % 4;

    let resultadoTexto = "El resultado es i a la " + resultado + "<br>";
    if (resultado === 0) {
        resultadoTexto += "i = 1";
    } else if (resultado === 1) {
        resultadoTexto += "i = i";
    } else if (resultado === 2) {
        resultadoTexto += "i = -1";
    } else if (resultado === 3) {
        resultadoTexto += "i = -i";
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
}