const sayHello = () => "Hello, World!";

console.log(sayHello());  

const addnum = (x,y) => x*y;
console.log(addnum(5, 10));


function Person() {
this.name = 'jack',
this.age =25,
this.sayage = function() {
    console.log(this.age);
    let innerFunc =() => {
        console.log(this.age);
    }
    innerFunc();
    }
}
    const x = new Person();
    x.sayage();

    function sum(x = 3, y = 5) {
    // return sum
    return x + y;
}

// pass arguments to x and y
var result = sum(5, 15);
console.log(`Sum of 5 and 15: ${result}`);

// pass argument to x but not to y
result = sum(7);
console.log(`Sum of 7 and default value (5): ${result}`);

// pass no arguments
// use default values for x and y
result = sum();
console.log(`Sum of default values (3 and 5): ${result}`);