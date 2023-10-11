// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
    function sayName() {
        function writeName() {
            return fullName;
        }
        return writeName();
    }
    return sayName();
}

console.log(profile()); // Oluwatobi Sofela
console.log("Following this chain: \n writeName() scope ---> sayName() scope ---> profile() scope ---> global scope\n");
//////////////////////////////////////////////////////////

// First fullName variable defined in the global scope:
const fullName1 = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile1() {
    const fullName = "Tobi Sho";
    function sayName() {
        const fullName = "Oluwa Sofe";
        function writeName() {
            return fullName;
        }
        return writeName();
    }
    return sayName();
}

console.log(profile1()) // Oluwa Sofe
console.log("Uses the most recent version of fullName it has access too.\n")
///////////////////////////////////////////////////////////////


// Define a function:
function showLastName() {
    const lastName = "Sofela";
    return lastName;
}

let lastName = "New Scoped"

// Define another function:
function displayFullName() {
    const fullName = "Oluwatobi " + lastName;
    return fullName;
}

// Invoke displayFullName():
console.log(displayFullName()+'\n'); //Oluwatobi New Scoped
/////////////////////////////////////////////////////////////

function showLastName1() {
    const lastName = "Sofela";
    return lastName;
}

// Define another function:
function displayFullName1() {
    const fullName = "Oluwatobi " + showLastName1();
    return fullName;
}

// Invoke displayFullName():
console.log(displayFullName1()); //Oluwatobi Sofela
/////////////////////////////////////////////////////////////