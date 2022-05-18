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
  let counter = 0;
  for (const key in array) {
    if(array[key] == highestValue){
    counter += 1;
    }
  }
  return counter
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if(distanceCat1 == distanceCat2){
    return 'os gatos trombam e o rato foge';
  }else if(distanceCat1 < distanceCat2){
    return 'cat1';
  }else{
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultArray = []

  for (const key in array) {
    if (array[key] % 3 == 0 && array[key] % 5 != 0){
      resultArray.push('fizz');
    }else if (array[key] % 5 == 0 && array[key] % 3 != 0){
      resultArray.push('buzz');
    }else if(array[key] % 3 == 0 && array[key] % 5 == 0){
      resultArray.push('fizzBuzz');
    }else{
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(str) {
  let encodedStr = ''
  for (const key in str) {
     encodedStr += str[key].replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4').replace('u', '5');
  }
  return encodedStr;
}


function decode(str) {
  let decodedStr = ''
  for (const key in str) {
     decodedStr += str[key].replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u');
  }
  return decodedStr;
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
