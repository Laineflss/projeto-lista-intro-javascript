// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  

const alturaUser = Number(prompt('Digite a altura do seu retângulo', altura))
const larguraUser = Number(prompt('Coloque a largura do seu retângulo', largura))
const area = alturaUser*larguraUser

console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
  const anoAtualUser = Number(prompt('Digite a altura do seu retângulo', anoAtual))
  const anoDeNascimentoUser = Number(prompt('Coloque a largura do seu retângulo', anoDeNascimento))
  const idade = anoAtualUser-anoDeNascimentoUser
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const IMC = peso/(altura*altura)
return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nameUser = prompt('Digite o seu nome', nome)
  const idadeUser = Number(prompt('Coloque a sua idade', idade))
  const emailUser = prompt('Digite o seu email', email)
  const frase = 'Meu nome é ' + nameUser + ', tenho ' + idadeUser + ' anos, e o meu email é ' + emailUser + '.'
  
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corfavorita1, corfavorita2, corfavorita3) {
  // implemente sua lógica aqui
  const corFavorita1User = prompt('Digite a altura do seu retângulo', corfavorita1)
  const corFavorita2User = prompt('Coloque a largura do seu retângulo', corfavorita2)
  const corFavorita3User = prompt('Digite a altura do seu retângulo', corfavorita3)
  const coresFavoritas = [corFavorita1User, corFavorita2User, corFavorita3User]
  
  console.log(coresFavoritas)
} imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const stringMaiusculo = string.toUpperCase()
return stringMaiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return (primeiroElemento)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1]
  return (ultimoElemento)
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  array[0]= ultimoElemento
  array[array.length-1]= primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}