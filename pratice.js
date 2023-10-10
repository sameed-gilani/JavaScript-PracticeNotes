// var

var a = 5
console.log(a) // returns 5

console.log(b) // returns undefined. Due to hoisting

var b = 10

// let

let c = 1
console.log(c) // returns 1

console.log(d) // returns a referrence error because let does default it to undefined

let d = 10

// const

const e = 100

// const e = 110 returns an error beacuse it cant be redeclared
// ce = 110 also returns an error because it cant be updated


foo(); // "foo"

function foo() {
	console.log('foo');
}

// will print foo. Due to hoisting, the function declaration is moved to the top

console.log(foo) // Will print the functions code itself

foo(); // Uncaught TypeError: foo is not a function
var foo = function () { }

bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
let bar = function () { }

baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = function () { }



const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.name + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName()); // returns John doe


function test() {
    console.log('this in a function', this);
}

test() // returns object window


console.log('this in global', this); // returns object window


