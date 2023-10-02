
// The function to check if a string is a palindrome
function checkForPolydrome(originalText) {
  const resultText = originalText.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= resultText.length; i++) {
    if (resultText[i] === resultText[resultText.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
// eslint-disable-next-line no-console
console.log(checkForPolydrome('Лёша на полке клопа нашёл '));


// The function that returns a positive integer
function checkPositiveInteger(string) {
  const typeOfString = String(string);
  let resultNumber = '';
  for (let i = 0; i <= typeOfString.length; i++) {
    if (!isNaN(typeOfString[i], 10)) {
      resultNumber += typeOfString[i];
    }
  }
  return Number(resultNumber) > 0 ? Number(resultNumber) : NaN;
}
// eslint-disable-next-line no-console
console.log(checkPositiveInteger('ECMAScript 2022'));


// The function returns the original string, padded with the specified characters to the specified length.
function returnSpecifiedLength(string, minimal, add) {
  let resultString;
  if (string.length >= minimal) {
    resultString = string;
  } else {
    resultString = string.padStart(minimal, add);
  }
  return resultString;
}
// eslint-disable-next-line no-console
console.log(returnSpecifiedLength('qttt', 7, 'werty'));


function generatingRandomNumber(min, max, decimal) {
  if (min >= 0 && max > 0 && min < max) {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = +randomNumber.toFixed(decimal);
    return randomNumber;
  } else {
    return NaN;
  }
}
// eslint-disable-next-line no-console
console.log(generatingRandomNumber(6, 2, 6));
