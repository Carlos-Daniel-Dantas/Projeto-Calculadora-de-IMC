
// Captura global dos elementos

const inpputPeso = document.getElementById('weight')
const inpputAltura = document.getElementById('height')
const textResultado = document.getElementById('resultText')
const formulario = document.getElementById('IMCform')


function MostrarResultado(){
    textoResultado.textContent = mensage;
}


function calcularIMC(){

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25 )


