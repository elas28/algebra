const textManipulator = {
  reverseText(text) {
    return text.split("").reverse().join("");
  },
  // 1. Varijanta
  capitalizeText(text) {
    return text
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  },
  // 2. Varijanta
  capitalizeTextAlternative(text) {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  },
  // 3. Varijanta
  capitalizeWords(text) {
    var words = text.split(" ");
    var capitalizedWords = [];

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" ");
  },
  combineTexts(text1, text2) {
    return `${text1} ${text2}`;
  },
};

const reverseTextFun = textManipulator.reverseText.bind(textManipulator);
const capitalizeTextFun = textManipulator.capitalizeWords.bind(textManipulator);

// Testiranje funkcija
const originalText = "hello world";
const reversed = reverseTextFun(originalText);
const capitalized = capitalizeTextFun(originalText);
const combined = textManipulator.combineTexts(reversed, capitalized);

console.log("Original Text:", originalText);
console.log("Reversed Text:", reversed);
console.log("Capitalized Text:", capitalized);
console.log("Combined Text:", combined);
