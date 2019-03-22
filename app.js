// 1. Verbal questions
// What is the difference between a parameter and an argument?
    // The argument is the input, the parameter is how the input is represented in the function.
// Within a function, what is the difference between return and console.log?
    // console.log is will print out whatever is specified in the (). Return will return a value of a function to pass data.
// What are the implications of the ability of a function to return a value?
    // Return ends the function.
// 

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. 
// Yes, you've done it before, but do it again. Later in this assignment we're 
// gonna beef up our palindrome function some. See if you can do it without 
// looking back at your previous answer. The function should return true 
// if the string is a palindrome, false if not. Make sure your function will 
// give the correct answer for words with capital letters.

const checkPalindrome = (str) => {
    let strRev = str.split("").reverse().join("")
    // console.log(strRev);
    if (strRev.toLowerCase() === str.toLowerCase()) {
        console.log("This is Palindrome.");
    } else {
        console.log("Not a Palindrome.");
    } 
    // split reverse join
}

checkPalindrome("Hello");

// 3. Digit Sum
// Write a function sumDigits that accepts a number 
// and returns the sum of its digits.

const sumDigits = (num) => {
    let storeNum = num.toString().split("");
    // console.log(storeNum);
    let sum1 = 0 
    // write a loop that loops through the num given
    for (let i = 0; i < storeNum.length; i++) {
        sum1 = sum1 + parseInt(storeNum[i]);
    } return sum1;
    // stores in a array
    // add array together
}
console.log(sumDigits(111111));

// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, 
// //and returns the solution for sideC using the Pythagorean theorem.

const calculateSide = (a,b) => {
    return(Math.sqrt((a * a) + (b * b)));
}
console.log(calculateSide(8,6));

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers.
//  The function should return the sum of the numbers in the array.

const sumArray = (array) => {
    let numbers = 0;
    for (let i = 0; i < array.length; i++) {
        // everytime it loops through i want to add the numbers to 
        // each other
        numbers = array[i] + numbers;
        // console.log(numbers);
    }
}
console.log(sumArray([2,2,1,3,5]));

// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
// If you want to read more deeply about it, go here. To test whether a number is Prime, 
// you only need to test as far as the square root of that number. 
// This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a 
// number is Prime. The function will return true (Boolean) if Prime, 
// false if not. Hint: Check every number up to the square root.
//  To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print 
// (console log) all the Primes up to an arbitrary limit. 
// For example, if you invoke your function with printPrimes(97), 
// it will print all the Prime numbers up to and including 97. 
// This function can call on the previous checkPrime function.

// const checkPrime = (num) => {
//     let prime = [];
//     for (let i = 2; i <= num; i++) {
//         prime[i] = true;
//     }
//     let squar = Math.sqrt(num);
//     for (let i = 2; i < squar; i++) { 
//         if (prime[i] === true) {
//             for (let p = i * i; p < num; p += 1) {
//                 prime[p] = false;
//             }
//         }
//     }
//     for (let i = 2; i < num; i++ ) {
//         if (prime[i]=== true) {
//             console.log(i + " " + prime[i]);
//         }
//     }
// } 

// checkPrime(97); 
const checkPrime = (num) => {
    let primes = Math.sqrt(num); 
    for (let i = 2; i <= primes; i++) {
        if(num % i === 0) return false; 
    return num > 1;
    }
}
const printPrimes = (num) => {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i) === true) {
            console.log(i + " is a Prime number");
        }
    }
    // loop through num
    // place num is function to test if true
    // if true then log that is prime
}
printPrimes(97);
