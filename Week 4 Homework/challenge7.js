
// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.
// Usage examples:
// console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
// console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
// console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]

function convertNumbersToStrings(array) {

    let result = [];

    for (let index = 0; index < array.length; index++) {
        let currentNum = array[index];
        let stringNum = currentNum.toString()
        result.push(stringNum)
        
    }
    return result
}

console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]