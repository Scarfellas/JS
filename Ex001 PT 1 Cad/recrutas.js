const primeiroNome = prompt('Informe o primeiro nome:')
const sobrenome = prompt('Informe o sobrenome:')
const campoDeEstudo = prompt('Qual campo de estudo do Recruta:')
const anoDeNascimento = prompt('Informe o ano de nascimento:')

alert(
    "\nRecruta cadastrado com sucesso!" + 
    "\nnome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudos: " + campoDeEstudo + 
    "\nIdade: " +(2023 - anoDeNascimento)
)