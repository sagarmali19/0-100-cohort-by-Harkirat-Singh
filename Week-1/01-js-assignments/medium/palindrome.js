/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const updatedStr = lowercaseStr.replace(/[^a-z0-9]/g, '');
  let reveresedStr = "";
  for (let i = updatedStr.length - 1; i >= 0; i--) {
    reveresedStr += updatedStr[i];
    console.log(reveresedStr);
  }
  if (updatedStr === reveresedStr) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
