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