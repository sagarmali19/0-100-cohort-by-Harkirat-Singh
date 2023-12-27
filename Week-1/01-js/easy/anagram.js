/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove white spaces and convert to the lowercaes
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Convert strings to arrays for manupilation
  str1 = str1.split('');
  str2 = str2.split('');

  // Sort the arrays
  str1.sort();
  str2.sort();

  // Convert arrays back to Strings
  const sortedStr1 = str1.join('');
  const sortedStr2 = str2.join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
