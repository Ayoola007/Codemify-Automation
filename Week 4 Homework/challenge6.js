
// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.
// Usage examples:
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(10)); // 3628800

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for (let index = 2; index <= number; index++) {
       result = result * index
        
    }

    return result
}



console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800

