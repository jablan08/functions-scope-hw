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