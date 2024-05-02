const boton = document.querySelector('#boton');
const parrafo = document.querySelector('#resultado');

// Calcular 
boton.addEventListener('click', () => {
    const expresion = document.querySelector('#tumama').value;
    if (expresion.includes == 'i'){
        expresion.replace ("i", Math.sqrt(-1))
    }
    try {
        const resultado = math.evaluate(expresion)
        parrafo.innerHTML = `El resultado es: ${resultado.toString()}`
    } catch (error) {
        parrafo.textContent = "Error al evaluar la expresión. Por favor, verifica la entrada."
    }
})