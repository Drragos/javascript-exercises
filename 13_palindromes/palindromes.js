const palindromes = function (string) {
  let newString = [];
  let backString = [];
  for (let i = 0; i <= string.length - 1; i++) {
    if (
      ![" ", "!", ".", ","].includes(string[i]) &&
      typeof string != "number"
    ) {
      newString += string[i].toLowerCase();
    } else continue;
  }
  for (let i = newString.length - 1; i >= 0; i--) {
    backString += newString[i];
  }

  if (newString === backString) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
