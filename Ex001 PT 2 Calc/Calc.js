const entrada1 = prompt ("Informe o primeiro número: ")
const entrada2 = prompt ("Informe o Segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divsao = x / y


alert(
    "Resultados \n" +
    "\n Soma: " + soma + 
    "\n Subtração: " + subtracao + 
    "\n Multiplicação: " + multiplicacao + 
    "\n Divisão: " + divsao 
    
)