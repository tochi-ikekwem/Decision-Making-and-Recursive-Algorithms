// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400
function isLeapYear(year) {   
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {  
        return true;   
    } else {  
        return false;
    }  
}  


const yearInput = prompt("Enter a year:"); 
const year = parseInt(yearInput);  

if (isLeapYear(year)) {  
    console.log(`${year} is a leap year.`);  
} else {  
    console.log(`${year} is not a leap year.`);  
}




// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20
function getTicketPrice(age) {  
    if (age <= 12) {  
        return 10; 
    } else if (age >= 13 && age <= 17) {  
        return 15; 
    } else if (age >= 18) {  
        return 20;  
    } else {  
        return null;  
    }  
}  


const ageInput = prompt("Enter your age:");  
const age = parseInt(ageInput);  


if (!isNaN(age) && age >= 0) {  
    const ticketPrice = getTicketPrice(age);  
    if (ticketPrice !== null) {  
        console.log(`The price of the movie ticket is $${ticketPrice}.`);  
    } else {  
        console.log("Invalid age entered.");  
    }  
} else {  
    console.log("Please enter a valid age.");  
}




// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacci(n) {  

    if (n < 0) {  
        return "Invalid input: n must be a non-negative integer.";  
    } else if (n === 0) {  
        return 0;  
    } else if (n === 1) {  
        return 1;  
    }  


    return fibonacci(n - 1) + fibonacci(n - 2);  
}  


const n = parseInt(prompt("Enter the position (n) in the Fibonacci sequence: "));  
const fibNumber = fibonacci(n);  
console.log(`The ${n}th Fibonacci number is ${fibNumber}.`);







// Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {  

    if (exponent === 0) {  
        return 1;
    }  


    if (exponent < 0) {  
        return 1 / power(base, -exponent);
    }  

    
    return base * power(base, exponent - 1);  
}  


const base = parseFloat(prompt("Enter the base: "));  
const exponent = parseInt(prompt("Enter the exponent (can be negative): "));  
const result = power(base, exponent);  
console.log(`${base} raised to the power of ${exponent} is ${result}.`);