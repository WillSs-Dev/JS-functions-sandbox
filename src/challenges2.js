// Desafio 11
function generatePhoneNumber(array) {
  if(array.length != 11){
    return 'Array com tamanho incorreto.'
  }else{
    let verify = true
    for (const key in array) {
      let currentNumber = array[key]
      let repetitions = 0
      for (const i in array) {
        if(currentNumber == array[i]){
          repetitions += 1
        }
      }
      if (repetitions >= 3 || array[key] < 0 || array[key] > 9) {
        verify = false
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    if(verify == true){
      let rawNumber = array.join('')
      let ddd = rawNumber.slice(0,2)
      let firstHalf = rawNumber.slice(2,7)
      let secondHalf = rawNumber.slice(7,11)
      return `(${ddd}) ${firstHalf}-${secondHalf}`
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
