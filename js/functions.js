
// The function to check if a string is a palindrome\
// Внес следующие правки:
// 1) Переписал функцию на стрелочную
// 2) Переделал проверку на полиндром
// 3) Теперь проверяет половину слова

const checkForPolindrome = (originalText) => {
  const resultText = originalText.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= Math.ceil(resultText.length / 2); i++) {
    if (resultText[i] !== resultText[resultText.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-console
console.log(checkForPolindrome('Потоп'));


// The function that returns a positive integer
// Внес следующие правки:
// 1) Поправил длинну массива
// 2) Убрал у проверки на NaN указание системы исчисления
// 3) Не стал переделывать на Number.isNaN(x), так как он будет возвращать NaN и не преобразовывать строку в число.

const checkPositiveInteger = (string) => {
  const typeOfString = String(string);
  let resultNumber = '';
  for (let i = 0; i <= typeOfString.length - 1; i++) {
    if (!isNaN(typeOfString[i])) {
      resultNumber += typeOfString[i];
    }
  }
  return Number(resultNumber) > 0 ? Number(resultNumber) : NaN;
};
// eslint-disable-next-line no-console
console.log(checkPositiveInteger('ECMAScript 2022'));


// The function returns the original string, padded with the specified characters to the specified length.
// Внес следующие правки:
// 1) Переименовал функцию
// 2) Убрал else

const getSpecifiedLength = (string, minimal, add) => {
  let resultString;
  if (string.length >= minimal) {
    resultString = string;
    return resultString;
  }
  return string.padStart(minimal, add);
};

// eslint-disable-next-line no-console
console.log(getSpecifiedLength('qttt', 7, 'werty'));


const generatingRandomNumber = (min, max, decimal) => {
  if (min >= 0 && max > 0 && min < max) {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = +randomNumber.toFixed(decimal);
    return randomNumber;
  } else {
    return NaN;
  }
};
// eslint-disable-next-line no-console
console.log(generatingRandomNumber(2, 6, 2));
