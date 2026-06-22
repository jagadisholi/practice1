let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[1]);  // 10

// access third element
console.log(numbers[2]);  // 40

let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);

// Output: [ 'eat', 'sleep', 'exercise' ]


let dailyActivities = ["eat", "sleep"];

// add an element at the beginning
dailyActivities.unshift("work"); 

console.log(dailyActivities);

// Output: [ 'work', 'eat', 'sleep' ]


let dailyActivities = [ "eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

console.log(dailyActivities);

// Output: [ 'eat', 'exercise', 'sleep' ]


let numbers = [1, 2, 3, 4, 5];

// remove one element
// starting from index 2
numbers.splice(2, 1);

console.log(numbers);

// Output: [ 1, 2, 4, 5 ]

// multidimensional array
// contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

// Output : [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]

// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array
// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]

let x = [
['Jack', 24],
['Sara', 23], 
['Peter', 24]
];

// access the first item 
console.log(x[0]);  // [ 'Jack', 24 ]

// access the first item of the first inner array
console.log(x[0][0]);  // Jack

// access the second item of the third inner array
console.log(x[2][1]);  // 24