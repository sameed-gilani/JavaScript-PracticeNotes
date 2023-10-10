//Noncurried version
const add = (a, b, c)=>{
    return a + b + c
}
console.log(add(2, 3, 5)) // 10

//Curried version
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10


function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6


// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
console.log(value1.description) // hello

let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

let i = 10
while(i!=0){
	console.log(i)
	i--;
}


for (let i = 1; i <= 5; i++) {  
 console.log(“I can count to “ + i)  
}


let booksRead = 10;  

do {  
 console.log(`I read ${booksRead} books this year`);  
 booksRead++;  
} while (booksRead < 14);


const foodIAte = {  
 breakfast: ‘eggs’,  
 lunch: ‘salad’,  
 dinner: ‘pizza’  
};

for(const meal in foodIAte) {  
 console.log(`For ${meal}, I ate ${foodIAte[meal]}.`);  
};

const array = [5, 10, 15];  
for (const value of array) {  
 console.log(value);  
}


const array = [5, 10, 15];  
for (const value of array) {  
 console.log(value);  
}


const array = [5, 10, 15]; 
array.push(20);
// array = [5,10,15,20]

array.unshift(0);
// array = [0,5,10,15,20]

array.pop();
// array = [0,5,10,15]

array.shift();
// array = [5,10,15]

const array = [5,10,15,20];
const array_copy = array.slice();

console.log(array_copy); // [5,10,15,20]

const array_slice = array.slice(1,3);
//array_slice = [5,10];

const array_slice_1 = array.slice(-3,-1);
// array_slice_1 = [10,15]


const householdItems = ["Table", "Chair", "Fan"];
const [a, b, c] = householdItems;

console.log(a); // Output: Table
console.log(b); // Output: Chair
console.log(c); // Output: Fan

const householdItems = ["Table", "Chair", "Fan"];
const [a, ,c] = householdItems;

// a = Table
// c = Fan

const a = [5,10,15];
const b = [20,25,30];

const ab = [...a, ...b];
console.log(ab);


const array = [1,2,3];
const array1 = [4,5,6];
const array2 = [7,8,9];

const m = array.concat(array1); // [1,2,3,4,5,6]
const m1 = array1.concat(array); // [4,5,6,1,2,3]
const m2 = array.concat(array1, array2); // [1,2,3,4,5,6,7,8,9]


const array = [1,2,3,4];
const joint = array.join();
// joint = '1,2,3,4'


const names = ['tom', 'alex', 'bob', 'john'];

names.includes('tom'); // returns true
names.includes('july'); // returns false

const names = ['tom', 'alex', 'bob'];

names.splice(1, 0, 'zack');

console.log(names); // ["tom", "zack", "alex", "bob"]


const names = ['tom', 'alex', 'bob'];

const deleted = names.splice(2, 1, 'zack');

console.log(deleted); // ["bob"]
console.log(names); // ["tom", "alex", "zack"]








