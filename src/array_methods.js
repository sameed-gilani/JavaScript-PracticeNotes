testing_filter();
testing_find();
testing_map();
testing_reduce();
testing_some();
testing_every();


function testing_every(){
    console.log("\nTESTING Every()");

    // a test function: returns age that is less that 18
    function checkMinor(age) {
        return age < 18;
    }

    const ageArray = [34, 23, 20, 26, 12];

// checks whether ageArray contains any element that is less than 18
    let check = ageArray.every(checkMinor);


    console.log(check); // false
    console.log([34,20,26,23].every(e=> e >18)); // true
    console.log([34,20,26,24].every(e=> e%2 === 0)); //true


}

function testing_some(){
    console.log("\nTESTING Some()");

    const array = [1, 2, 3, 4, 5];

    let test = array.some(element => element === 3)// output: true
    let test2 = array.some(element => element === 8)//output false

    console.log(test, test2);


    // a test function: returns age that is less that 18
    function checkMinor(age) {
        return age < 18;
    }

    const ageArray = [34, 23, 20, 26, 12];

// checks whether ageArray contains any element that is less than 18
    let check = ageArray.some(checkMinor);


    console.log(check); // true
    console.log([34,20,26,23].some(e=> e <18)); // False

}

function testing_reduce(){
    console.log("\nTESTING Reduce()");

    const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
    function joinStrings(accumulator, currentValue) {
        return accumulator + currentValue;
    }

// reduce join each element of the string
    let joinedString = message.reduce(joinStrings);

    console.log(joinedString);



    const numbers = [1, 2, 3, 4, 5, 6];

    function sum_reducer(accumulator, currentValue) {
        return accumulator + currentValue;
    }

    let sum = numbers.reduce(sum_reducer);

    console.log(sum); // 21

// using arrow function
    let summation = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(summation); // 21

}

function testing_map(){
    console.log("\nTESTING Map()");

    let dummyArray = [
        {id : 1 , name:'john'},
        {_id : 2, name: 'Smith'},
        {_id : 3, name: 'James'} ,
        {_id : 4, name: 'Wick'} ,
        {_id : 5, name: 'Jennifer'} ,
        {_id : 2, name: 'Lorenz'}
    ]

    console.log(dummyArray.map(e=> e._id === 2));
    // [ false, true, false, false, false, true ]


    let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
    function square(number) {
        return number * number;
    }

// apply square() function to each item of the numbers list
    let square_numbers = numbers.map(square);

    console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]
}

function testing_find(){
    console.log("\nTESTING Find()");

    let dummyArray = [
        {id : 1 , name:'john'},
        {_id : 2, name: 'Smith'},
        {_id : 3, name: 'James'} ,
        {_id : 4, name: 'Wick'} ,
        {_id : 5, name: 'Jennifer'} ,
        {_id : 2, name: 'Lorenz'}
    ]

    console.log(dummyArray.find(e => e.name==='Wick'));
    console.log(dummyArray.find(e => e.name==='Sameed'));

    let numbers = [1, 3, 4, 9, 8];

// function to check even number
    function isEven(element) {
        return element % 2 === 0;
    }

// get the first even number
    let evenNumber = numbers.find(isEven);
    console.log(evenNumber);

    let number10 = numbers.find(e => e === 10);
    console.log(number10);
}

function testing_filter(){
    console.log("\nTESTING Filter()");

    let dummyArray = [
        {id : 1 , name:'john'},
        {_id : 2, name: 'Smith'},
        {_id : 3, name: 'James'} ,
        {_id : 4, name: 'Wick'} ,
        {_id : 5, name: 'Jennifer'} ,
        {_id : 2, name: 'Lorenz'}
    ]

    let result = dummyArray.filter(e => e._id === 2)

    console.log(result)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function checkEven(number) {
        return number % 2 === 0;
    }

    function findNumber5(number){
        return number === 5;
    }

    let evenNumbers = numbers.filter(checkEven);
    console.log(evenNumbers);

    let numberSearch5 = numbers.filter(findNumber5);
    console.log(numberSearch5);
}
