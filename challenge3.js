// 1. Write a method or function that removes all instances of the letter <strong>s</strong> in a string. The method or function should accept a string as an argument and return the same string with every instance of the letter <strong>s</strong> removed.
// WRITE A FUNCTION THAT REMOVES ALL THE "S" LETTERS FROM A GIVEN STRING


function removeLetter(string) {
    return string.replaceAll('s', '');
  }
  
  console.log(removeLetter('shortest'));