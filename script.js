// Variables
const cuadradoFormula = document.getElementById('cuadrado');
const cuboFormula = document.getElementById('cubo');
const solucionTitulo = document.getElementById('solucion');
const btnBotonsito = document.getElementById('boton');

// Calcular
btnBotonsito.addEventListener("click", function(){
    // Retrieve input values
    const aInput = parseFloat(document.getElementById('aNumberInput').value);
    const bInput = parseFloat(document.getElementById('bNumberInput').value);
    const exponenteInput = parseInt(document.getElementById('exponenteNumberInput').value);

    // Type of exponente
    if (exponenteInput === 2) {
        // Modifying formula
        const cuadrado = `(${aInput} + ${bInput})2 = ${aInput}2 + 2(${aInput})(${bInput}) + ${bInput}2`;
        cuadradoFormula.textContent = cuadrado;
        console.log(cuadrado)

        // Solving operation
        const solucion = aInput ** 2 + 2 * aInput * bInput + bInput ** 2;
        solucionTitulo.textContent = `Solución: ${solucion}`;     

    } 
    else if (exponenteInput === 3) {
        // Modifying formula
        const cubo = `(${aInput} + ${bInput})3 = ${aInput}3 + 3(${aInput})2(${bInput}) + 3(${bInput})2(${aInput}) + ${bInput}3`;
        cuboFormula.textContent = cubo;
        console.log(cubo)

        // Solving operation
        const solucion = aInput ** 3 + 3 * aInput** 2 * bInput + 3 * bInput ** 2 * aInput + bInput ** 3;
        solucionTitulo.textContent = `Solución: ${solucion}`;
    }
    else {
        alert("No se hacerlo con ese exponente perdon uwu")
    }
    console.log(solucion)
});
