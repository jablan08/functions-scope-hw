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