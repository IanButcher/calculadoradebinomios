// Variables
const cuadradoFormula = document.querySelector('#cuadrado')
const cuboFormula = document.querySelector('#cubo')
const solucionTitulo = document.querySelector('#solucion')
const btnBotonsito = document.querySelector('#boton')
const cuadradosHechos = document.querySelector('.cuadradosHechos')
const cubosHechos = document.querySelector('.cubosHechos')

// Solve
btnBotonsito.addEventListener("click", ()=>{

    // Retrieve input values
    const aInput = parseFloat(document.querySelector('#aNumberInput').value)
    const bInput = parseFloat(document.querySelector('#bNumberInput').value)
    const exponenteInput = parseInt(document.getElementById('exponenteNumberInput').value)

    // Handling NaN bugs
    const allInputs = document.querySelectorAll("input")
    for (const diputado of allInputs){
        if(!diputado.value){
            alert("El valor de A y/o B no puede ser nulo o cadena de caracteres. Por favor, ingrese un numero")
            return
        }
    }
    // Type of exponente
    if (exponenteInput === 2) {
        // Modifying formula
        const cuadrado = `(${aInput} + ${bInput}) <sup>2</sup> = ${aInput}<sup>2</sup> + 2(${aInput})(${bInput}) + ${bInput} <sup>2</sup>`
        cuadradoFormula.innerHTML = cuadrado

        // Solving operation
        const solucion = aInput ** 2 + 2 * aInput * bInput + bInput ** 2
        solucionTitulo.textContent = `Solución: ${solucion}`

        // Adding it to cuadradosHechos
        const cuadradoResult = `<h4>${cuadrado}</h4> = ${solucion}`
        cuadradosHechos.insertAdjacentHTML('beforeend', cuadradoResult)
    } 
    else if (exponenteInput === 3) {
        // Modifying formula
        const cubo = `(${aInput} + ${bInput})<sup>3</sup> = ${aInput}<sup>3</sup> + 3(${aInput})<sup>2</sup>(${bInput}) + 3(${bInput})<sup>2</sup>(${aInput}) + ${bInput}<sup>3</sup>`
        cuboFormula.innerHTML = cubo

        // Solving operation
        const solucion = aInput ** 3 + 3 * aInput** 2 * bInput + 3 * bInput ** 2 * aInput + bInput ** 3
        solucionTitulo.textContent = `Solución: ${solucion}`

            // Adding it to cubosHechos
            const cuboResult = `<h4>${cubo}</h4> = ${solucion}`
            cubosHechos.insertAdjacentHTML('beforeend', cuboResult)
    }
    else {
        alert("No se hacerlo con ese exponente perdon uwu")
    }        
});


// DarkMode btn
const darkModeBtn = document.querySelector('#darkMode')
const allDivs = document.querySelectorAll("div")
const darkModeCheckbox = document.getElementById("darkModeCheckbox");

darkModeCheckbox.addEventListener("change", () => {
    if (darkModeCheckbox.checked) {
        document.body.classList.add('DARKMODE');
        for (const div of allDivs) {
            div.classList.add('DARKMODE');
        }
    } else {
        document.body.classList.remove('DARKMODE');
        for (const div of allDivs) {
            div.classList.remove('DARKMODE');
        }
    }
});

const popup = document.getElementById('popup1');
let isDragging = false;
let offsetX, offsetY;

popup.addEventListener("mousedown", startDragging);

function startDragging(e) {
    const rect = popup.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    isDragging = true;
    
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
}

function drag(e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        // Ajustar la posición para que el cursor esté en el centro del popup
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        
        popup.style.left = `${x - popupWidth / 2}px`;
        popup.style.top = `${y - popupHeight / 2}px`;
    }
}


popup.ondragstart = function() {
    return false;
  };
