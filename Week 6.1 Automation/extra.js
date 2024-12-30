// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// Usage examples:
// console.log(getLargestPalindrome(1000));; // 906609




function getLargestPalindrome(maxNumber) {
    let largestPalindrome = 0;
    for (let i = 0; i <= maxNumber; i++) {
        for (let j = i; j <= maxNumber; j++) {
            const result = i * j;
            if(result.toString() === result.toString().split('').reverse().join('') && result > largestPalindrome) {
                largestPalindrome = result;
               
            }
        }
    }
    return largestPalindrome;
}

console.log(getLargestPalindrome(1000));

// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them
// Usage examples:
//let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

function mostFrequent(arr, n) {
    if (n === 0) {
        return null; 
    }

    const frequency = {}; 
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < n; i++) {
        const element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;

        
        if (frequency[element] > maxCount) {
            maxCount = frequency[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement; 
}


let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n)); 

// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array
// Usage examples:
//let arr = [10,20, -1,22,99,20, -9];
// console.log(`The negative numbers in an array is ${negativeCount}`) //"The negative numbers in an array is 2"
// console.log(`The positive numbers in an array is ${poitiveCount}`) // "The positive numbers in an array is 5"


function countPositivesAndNegatives(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

   
    for (let number of ar) {
        if (number > 0) {
            positiveCount++; 
        } else if (number < 0) {
            negativeCount++; 
        }
    }

    return { positiveCount, negativeCount };
}

// Usage example
let ar = [10, 20, -1, 22, 99, 20, -9];
let { positiveCount, negativeCount } = countPositivesAndNegatives(arr);

console.log(`The negative numbers in an array is ${negativeCount}`); 
console.log(`The positive numbers in an array is ${positiveCount}`); 

// Challenge 4: Find duplicates in two arrays 
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays
// Usage examples:
//const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8]; //console.log(findDuplicates(array1, array2)); //  [4, 5, 7]

function findDuplicates(array1, array2) {
    const frequency = {}; 
    const result = []; 

    const combinedArray = [...array1, ...array2];

    for (const element of combinedArray) {
        frequency[element] = (frequency[element] || 0) + 1;
    }

    for (const key in frequency) {
        if (frequency[key] > 1) {
            result.push(Number(key)); 
        }
    }

    return result;
}

// Usage example
const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];
console.log(findDuplicates(array1, array2)); 
