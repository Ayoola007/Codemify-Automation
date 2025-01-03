
// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// Usage examples:
// console.log(palindrome('racecar')); // true
// console.log(palindrome('hello')); // false
// console.log(palindrome('a')); // true
// console.log(palindrome('madam')); // true

function palindrome(string) {
    const reversedString = string.split("").reverse().join("")

    if (reversedString === string) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true