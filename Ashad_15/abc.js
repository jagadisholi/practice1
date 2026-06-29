let text1 = "hello";
let text2 = "world";
let text3 = "     JavaScript    ";

// concatenate two strings
let result1 = text1.concat(' ', text2);
console.log(result1);  

// convert the text to uppercase
let result2 = text1.toUpperCase();
console.log(result2);  

// remove whitespace from the string
let result3 = text3.trim();
console.log(result3);  

// convert the string to an array
let result4 = text1.split();
console.log(result4);  

// slice the string
let result5= text1.slice(1, 3);
console.log(result5);  

const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
};

// use for...in to loop through
// properties of salaries
for (let i in salaries) {

    // access object key using [ ]
    // add a $ symbol before the key
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i}: ${salary}`);
};


// check if num1 is integer
let num1 = 12;
console.log(Number.isInteger(num1)); 

// check if num2 is NaN
let num2 = NaN;
console.log(Number.isNaN(num2)); 
// display up to two decimal points
let num3 = 5.1234;
console.log(num3.toFixed(2));