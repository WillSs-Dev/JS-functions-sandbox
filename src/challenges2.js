// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (const key in array) {
    let currentNumber = array[key];
    let repetitions = 0;
    for (const i in array) {
      if (currentNumber == array[i]) {
        repetitions += 1;
      }
    }
    if (repetitions >= 3 || array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let rawNumber = array.join('');
  let ddd = rawNumber.slice(0, 2);
  let firstHalf = rawNumber.slice(2, 7);
  let secondHalf = rawNumber.slice(7, 11);
  return `(${ddd}) ${firstHalf}-${secondHalf}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  let sides = [lineA, lineB, lineC];
  for (let i = 0; i < 3; i += 1) {
    if (
      Math.abs(sides[i]) < Math.abs(sides[i + 1] + sides[i + 2])
      && Math.abs(sides[i]) > Math.abs(sides[i + 1] - sides[i + 2])
    ) {
      isTriangle = true;
    } else if (
      Math.abs(sides[i]) < Math.abs(sides[i - 1] + sides[i - 2])
      && Math.abs(sides[i]) > Math.abs(sides[i - 1] - sides[i - 2])
    ) {
      isTriangle = true;
    } else if (
      Math.abs(sides[i]) < Math.abs(sides[i + 1] + sides[i - 1])
      && Math.abs(sides[i]) > Math.abs(sides[i + 1] - sides[i - 1])
    ) {
      isTriangle = true;
    } else {
      isTriangle = false;
    }
  }

  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  let drinksStr = drinks.split('');
  let numbers = 0;
  let output = '';

  for (const key in drinksStr) {
    if (drinksStr[key] > 0 && drinksStr[key] < 10) {
      let change = drinksStr[key];
      let sum = parseInt(change);
      numbers += sum;
    }
  }
  if (numbers > 1) {
    output = `${numbers} copos de água`;
  } else {
    output = `${numbers} copo de água`;
  }
  return output;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
