// Example of a simple recursion function:
// Sums all numbers between itself and 10, inclusive

function sumToTen(num) {
    // the base case (stopping condition). Once the num reaches 10, it no longer calls itself
    if (num >= 10) {
        return num;
    }

    // keeps track of the current iteration
    // calls itself <-- definition of recursion
    // must call itself during a different input, otherwise it will infinitely loop

    return num + sumToTen(num +1)
}
// 1+2+3+4+5+6+7+8+9+10
console.log(sumToTen(1))


// 1) Write a recursive function that does a count down, e.g., from some positive number, x, the function will print the numbers counting down until the number 1.

// example:
// input 5
// output: 
// 5
// 4
// 3
// 2
// 1

function countDown(num) {
    if (num <= 1) {
        return num
    }
    console.log(num);
    let newNum = num -1
    return countDown(newNum)

}  
console.log(countDown(5));

// 2)  Sum all numbers.  Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
    if (num === 1) {
        return 1;
    }    
    return num + sumRange(num-1);
}

console.log(sumRange(3));

// 3) Calculate factorial  (factorial is for non-negative integers only)

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function calcFactorial(num) {
    if (num ===1) {
        return 1;
    }
    return num * calcFactorial(num -1);
}
console.log(calcFactorial(6));

// 4) Product of an array

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// In this function you will change the array, making it smaller as your progress.
// Sample:
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

const six = productOfArray([1,2,3])
const sixty = productOfArray([1,2,3,10])

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }    
    return arr.shift() * productOfArray(arr);
}

console.log(six);
console.log(sixty);



// 5) Searching a JSON object recursively

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// Will this function test for values inside an array??  
// hint: you can use a for loop to cycle through the keys ---  for (let key in dict) 
// hint: you can test if something is an object: typeof dict[key] === 'object' . (note if you do this for an array, it returns 'object',  Array.isArray(array) returns true or false! - try it out!)