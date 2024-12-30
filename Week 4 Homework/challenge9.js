
// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.
// Usage examples:
// console.log(findLongestWord('The quick brown fox')); // 5
// console.log(findLongestWord('Hello world')); // 5
// console.log(findLongestWord('')); // 0
// console.log(findLongestWord('OneWord')); // 7

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWordLength = 0;

    for (let index = 0; index < words.length; index++) {
        if(words[index].length > longestWordLength) {
            longestWordLength = words[index].length
        }
        return longestWordLength
    }
}


console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7