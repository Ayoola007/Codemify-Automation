
// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
// Usage examples:
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
// console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
// console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1

function findLargestNumber(array){
    let result = array[0]

    for (let index = 1; index < array.length; index++) {
        const currentNumber = array[index];
        if (currentNumber > result){
            result = currentNumber
        }
        
    }
    return result
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1