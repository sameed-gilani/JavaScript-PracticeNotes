function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


function* generateSequence_iter() {
    yield 1;
    yield 2;
    return 3;
}

let generator_iter = generateSequence();

for(let value of generator_iter) {
    console.log(value); // 1, then 2
}

function* generateSequenceSpread() {
    yield 1;
    yield 2;
    yield 3;
}

let sequence = [0, ...generateSequenceSpread()];

console.log(sequence); // 0, 1, 2, 3


function* generateWithInput(){

    let id = 1;

    while(true){
        let input = yield id;
        if(input != null){
            id = input;
        }
        else{
            id++;
        }
    }
}

let inputSequence = generateWithInput();

console.log(inputSequence.next());
console.log(inputSequence.next());
console.log(inputSequence.next());
console.log(inputSequence.next(55));
console.log(inputSequence.next());
console.log(inputSequence.next());

