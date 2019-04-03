function translatePigLatin(str) {
  let reVowels = new RegExp(/[aeiou]/i);
    
  let vowelIndex = str.search(reVowels);
    
  if (str.charAt(0).match(reVowels)) {
    return str.split('').concat("way").join('');
  } else if (vowelIndex !== 0 && vowelIndex !== -1) {
    return str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay"; 
  } else {
    return str + "ay";
  }
}

translatePigLatin("consonant");