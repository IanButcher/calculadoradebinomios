// Variables
const cuadradoFormula = document.querySelector('#cuadrado')
const cuboFormula = document.querySelector('#cubo')
const solucionTitulo = document.querySelector('#solucion')
const btnBotonsito = document.querySelector('#boton')
const cuadradosHechos = document.querySelector('.cuadradosHechos')
const cubosHechos = document.querySelector('.cubosHechos')
const aInput = document.querySelector('#aNumberInput')
const bInput = document.querySelector('#bNumberInput')
const exponenteInput = document.getElementById('exponenteNumberInput')

// Event listeners for Enter key press
aInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        bInput.focus();
    }
});

bInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        exponenteInput.focus();
    }
});

exponenteInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnBotonsito.click(); // Trigger the button click event
    }
});

// Solve
btnBotonsito.addEventListener("click", ()=>{
    // Retrieve input values
    const a = parseFloat(aInput.value)
    const b = parseFloat(bInput.value)
    const exponente = parseInt(exponenteInput.value)

    // Handling NaN bugs
    const allInputs = [aInput, bInput, exponenteInput]
    for (const input of allInputs){
        if(!input.value){
            alert("El valor de A y/o B no puede ser nulo o cadena de caracteres. Por favor, ingrese un numero")
            return
        }
    }

    // Type of exponente
    if (exponente === 2) {
        // Modifying formula
        const cuadrado = `(${a} + ${b}) <sup>2</sup> = ${a}<sup>2</sup> + 2(${a})(${b}) + ${b} <sup>2</sup>`
        cuadradoFormula.innerHTML = cuadrado

        // Solving operation
        const solucion = a ** 2 + 2 * a * b + b ** 2
        solucionTitulo.textContent = `Solución: ${solucion}`

        // Adding it to cuadradosHechos
        const cuadradoResult = `<h4>${cuadrado}</h4> = ${solucion}`
        cuadradosHechos.insertAdjacentHTML('beforeend', cuadradoResult)
    } 
    else if (exponente === 3) {
        // Modifying formula
        const cubo = `(${a} + ${b})<sup>3</sup> = ${a}<sup>3</sup> + 3(${a})<sup>2</sup>(${b}) + 3(${b})<sup>2</sup>(${a}) + ${b}<sup>3</sup>`
        cuboFormula.innerHTML = cubo

        // Solving operation
        const solucion = a ** 3 + 3 * a** 2 * b + 3 * b ** 2 * a + b ** 3
        solucionTitulo.textContent = `Solución: ${solucion}`

        // Adding it to cubosHechos
        const cuboResult = `<h4>${cubo}</h4> = ${solucion}`
        cubosHechos.insertAdjacentHTML('beforeend', cuboResult)
    } else {
        alert("No se hacerlo con ese exponente perdon uwu")
    }        
});

// DarkMode btn
const darkModeBtn = document.querySelector('#darkMode')
const allDivs = document.querySelectorAll("div")
const darkModeCheckbox = document.getElementById("darkModeCheckbox");
const todoLoh4 = document.querySelectorAll('h4')

darkModeCheckbox.addEventListener("change", () => {
    if (darkModeCheckbox.checked) {
        document.body.classList.add('DARKMODE')
        for (inputado of todoLoh4){
            inputado.classList.add('blanco')
        }
        for (const div of allDivs) {
            div.classList.add('DARKMODE')
        }
    } else {
        document.body.classList.remove('DARKMODE')
        for (rocas of todoLoh4){
            rocas.classList.remove('blanco')
        }
        for (const div of allDivs) {
            div.classList.remove('DARKMODE')
        }
    }
})
