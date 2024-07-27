///////////////////////// assignment-35-38 ///////////////////////////
////////////////ques : 1
function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    alert(dateTimeString);
}
///////////ques : 2
function greetUser() {
    var firstName = prompt("Please enter your first name:");
    var lastName = prompt("Please enter your last name:");
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

///////////ques : 3
function addTwoNumbers() {
    var num1 = parseFloat(prompt("Please enter the first number:"));
    var num2 = parseFloat(prompt("Please enter the second number:"));
    var sum = num1 + num2;
    alert("The sum of the two numbers is: " + sum);
}

///////////ques : 4
function calculate() {
    var num1 = parseFloat(prompt("Please enter the first number:"));
    var num2 = parseFloat(prompt("Please enter the second number:"));
    var operator = prompt("Please enter the operator (+, -, *, /):");

    var result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator!");
            return;
    }
    
    alert("The result is: " + result);
}

///////////ques : 5
function squareNumber(num) {
    return num * num;
}

function promptAndSquare() {
    var number = parseFloat(prompt("Please enter a number:"));
    var square = squareNumber(number);
    alert("The square of " + number + " is: " + square);
}

///////////ques : 6
function factorial(num) {
    if (num < 0) return "Invalid input. Please enter a non-negative number.";
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

function promptAndComputeFactorial() {
    var number = parseInt(prompt("Please enter a non-negative integer:"));
    var result = factorial(number);
    alert("The factorial of " + number + " is: " + result);
}

///////////ques : 7
function displayCounting() {
    var start = parseInt(prompt("Please enter the start number:"));
    var end = parseInt(prompt("Please enter the end number:"));
    var counting = "";

    if (isNaN(start) || isNaN(end)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    if (start > end) {
        alert("Start number should be less than or equal to end number.");
        return;
    }

    for (var i = start; i <= end; i++) {
        counting += i + "<br>";
    }

    document.body.innerHTML += "<p>" + counting + "</p>";
}

///////////ques : 8
function calculateHypotenuse() {
    function calculateSquare(num) {
        return num * num;
    }

    var base = parseFloat(prompt("Please enter the base of the triangle:"));
    var perpendicular = parseFloat(prompt("Please enter the perpendicular of the triangle:"));

    if (isNaN(base) || isNaN(perpendicular) || base <= 0 || perpendicular <= 0) {
        alert("Invalid input. Please enter positive numbers.");
        return;
    }

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    alert("The hypotenuse of the triangle is: " + hypotenuse);
}

///////////ques : 9
function calculateArea(width, height) {
    return width * height;
}

function areaWithValues() {
    var area = calculateArea(5, 10); 
    alert("The area of the rectangle with width 5 and height 10 is: " + area);
}

///////////ques : 10
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
        return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome('Madam')); // true
console.log(isPalindrome('Hello')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true

///////////ques : 11
function capitalizeWords(str) {
    
    const words = str.split(' ');
    
    const capitalizedWords = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    
    return capitalizedWords.join(' ');
}


console.log(capitalizeWords('the quick brown fox')); 

///////////ques : 12
function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize a variable to keep track of the longest word
    let longestWord = '';
    
    // Iterate through the words to find the longest one
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    
    return longestWord;
}

// Example usage:
console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'


///////////ques : 13
function countLetterOccurrences(str, letter) {
    // Convert the string to lowercase and the letter to lowercase to ensure case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerLetter = letter.toLowerCase();
    
    // Initialize a counter
    let count = 0;
    
    // Iterate through the string and count occurrences of the letter
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerLetter) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
console.log(countLetterOccurrences('JSResourceS.com', 'o')); // Output: 2


///////////ques : 14
function calcCircumference(radius) {
    // Calculate the circumference using the formula 2 * π * r
    const circumference = 2 * Math.PI * radius;
    
    // Output the result
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    // Calculate the area using the formula π * r^2
    const area = Math.PI * Math.pow(radius, 2);
    
    // Output the result
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage:
calcCircumference(5); // Output: The circumference is 31.42
calcArea(5); // Output: The area is 78.54
