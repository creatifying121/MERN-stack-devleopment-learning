// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function numType(num){
    if(num>0){          // checking if input is greater than zero => positive
        return "positive"
    }else if(num<0){    // checking if input is less than zero => negative
        return "negative"
    }else{              // if above cases do not follow than it will be zero
        return "zero"
    }
}
console.log("number is", numType(3))
console.log("number is", numType(-4))
console.log("number is", numType(0))
console.log("------------------------------------------------------------")



// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N. 
function factorial(num){
    let res = 1             // since smallest factorial is 1 for input 1 or zero
    if(num==0 || num==1){
        return res          // base case: factorial of 0 and 1 is always 1
    }else if(num>1){        // we will calculate factorial only when input is greater than 1 because neg values do not have factorials
        for(let i=num; i>=1; i--){
            res = res*i;
        }
        return res;
    }else{                  // when input is other than positive numbers
        return "please provide a valid input"
    }
}
console.log("factorial is", factorial(5))
console.log(factorial(-3))
console.log("factorial is", factorial(0))
console.log("------------------------------------------------------------")


// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function larger(num1, num2){
    if(num1>num2){
        return num1
    }else{
        return num2
    }
}
console.log("larger is", larger(5,4))
console.log("larger is", larger(8,9))
console.log("------------------------------------------------------------")


// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function palindrome(str){
    // removing spaces, punctuations and capitalization
    const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // calculate new string length
    const len = newStr.length;

    // run a loop till half length
    for(let i=0; i<len/2; i++){
        // check if first and last character in string are same
        if(str[i] != str[len-1-i]){
            return false
        }
    }
    return true
}
console.log(palindrome("nayan"))
console.log(palindrome("shivani"))
console.log("------------------------------------------------------------")


// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function primesTillN(num){
    if(num<2){
        console.log("No prime numbers less than 2")
        return
    }
    console.log("Prime numbers up to "+num+":")
    for(let n = 2; n<=num; n++){
        let isPrime = true;

        // check if 'n' is divisible by any number from 2 to square root of 'n'
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i===0){
                isPrime = false
                break
            }
        }
        // if 'n' is prime, print it
        if(isPrime){
            console.log(n);
        }
    }
}
primesTillN(13)
console.log("------------------------------------------------------------")


// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function simpleCalculator(num1, opr, num2){
    if(opr === '+'){
        return num1+num2;
    }else if(opr === '-'){
        return num1-num2;
    }else if(opr === '*'){
        return num1*num2;
    }else if(opr === '/'){
        if(num2==0){
            return "Error: Division by zero"
        }else{
            return num1+num2;
        }
    }else{
        return "Invalid operator"
    }
}

console.log(simpleCalculator(2, '+', 3))
console.log(simpleCalculator(5, '-', 4))
console.log(simpleCalculator(5, '*', 4))
console.log(simpleCalculator(8, '/', 4))
console.log(simpleCalculator(5, '/', 0))
console.log(simpleCalculator(5, '^', 4))
console.log("------------------------------------------------------------")


// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
function vowelCount(str){
    // variable to keep track of number of vowels in string
    let count = 0;

    // iterating through each character to check whether it is vowel or not
    for(let i=0; i<str.length; i++){
        let char = str[i];

        // checking if character is a vowel
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U'){
            count=count+1;
        }
    }
    return count;
}

console.log(vowelCount("Shivani"))
console.log(vowelCount("Iamaeiou ha ha ha"))
console.log("------------------------------------------------------------")


// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function isPerfect(num){
    // base case
    if(num<=0){
        return false
    }
    // variable to store sum of divisors
    let sum = 0
    // loop to find out the divisors and adding them up
    for(let i=0; i<num; i++){
        if(num%i == 0){
            sum = sum+i;
        }
    }
    return sum===num
}
console.log(isPerfect(6))
console.log(isPerfect(5))
console.log("------------------------------------------------------------")

// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
function fibonacci(num){
    if(num<=0){
        console.log("Sequence for this number does not exist")
        return
    }
    let first = 0;
    let second = 1;
    let next;

    console.log("Fibonacci series upto "+num+" is:")
    for(let i=2; i<=num; i++){
        next = first+second

        if(next>num){
            break;   // stop if value of next becomes greater than input
        }
        // print the next value
        console.log(next)

        // now previous two values will change for new upcoming value
        first = second
        second = next
    }
}
console.log(fibonacci(13))
console.log(fibonacci(0))
console.log("------------------------------------------------------------")

// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
function multiplicationTable(num){
    if(num<=0){
        console.log("Input a number greater than 0")
        return
    }
    console.log("Multiplication table for "+num+":")
    for(let i=1; i<=10; i++){
        let ans = num * i
        console.log(num + " x " + i +" = "+ans)
    }
}
console.log(multiplicationTable(2))
console.log(multiplicationTable(0))