// 1. Given an array of strings, print only the strings that have exactly 4 characters.
// PRINT ONLY STRINGS WITH EXACTLY 4 LETTERS

var strings = ['hello', 'goodbye', 'roll', 'bear', 'look', 'gotcha', 'doggie'];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === 4) {
        console.log(strings[i])
    }
};