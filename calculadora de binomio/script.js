document.addEventListener('DOMContentLoaded', function() {
    
    const boton = document.querySelector('#boton')
    const parrafo = document.querySelector('#resultado')

    // Calcular 
    boton.addEventListener("click", () => {
        const expresion = document.querySelector('#operaciones').value
        try {
            const resultado = evaluarExpresion(expresion)
            parrafo.innerHTML = `El resultado es: ${resultado}`
            console.log(resultado)
        } catch (error) {
            parrafo.textContent = "Error al evaluar la expresión. Por favor, verifica la entrada."
        }
    })

    function evaluarExpresion(expresion) {
        expresion = expresion.replace(/i/g, Math.sqrt(-1))
        
        expresion = expresion.replace(/√\(([^)]+)\)/g, (match, contenido) => {
            return Math.sqrt(parseFloat(contenido))
        })
        console.log('Expresión:', expresion)
        const resultado = math.evaluate(expresion)
        return resultado
    }

    const btnSection = document.querySelector('.meterBotone')
    const expresion = document.querySelector('#operaciones')

    const botonesArr = ['i', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', '(', ')', '√']

    for (let boton of botonesArr) {
        let createdBtn = document.createElement("button")
        createdBtn.innerHTML = boton

        createdBtn.addEventListener("click", () => {
            if (boton === 'i') {
                expresion.value += 'i' 
            } else if (boton === '√') {
                expresion.value += '√()' 
            } else {
                expresion.value += boton 
            }
        })

        btnSection.appendChild(createdBtn)
    }

    function handleKeyDown(event) {
        const teclaPresionada = event.key
        if (botonesArr.includes(teclaPresionada)) {
            const botonCorrespondiente = document.querySelector(`button[value="${teclaPresionada}"]`)
            if (botonCorrespondiente) {
                botonCorrespondiente.click() 
            }
        }
    }

    document.addEventListener('keydown', handleKeyDown)

})

