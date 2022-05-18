// Desafio 1
function compareTrue(check, dbCheck) {
  if(check && dbCheck == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splittedStr = string.split(" ");
  return splittedStr;
}

// Desafio 4
function concatName(array) {
  let firstNm = array[0], lastNm = array[array.length-1];
  let concat = `${lastNm}, ${firstNm}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestValue = (Math.max(...array));
  let counter = 0
  for (const key in array) {
    if(array[key] == highestValue){
    counter += 1
    }
  }
  return counter
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
