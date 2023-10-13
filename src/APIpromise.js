const axios = require("axios");

// nestedPromises();
// console.log("\n");
// awaitPromises();

awaitPromisesArt();

async function awaitPromisesArt(){

    const call1 = await axios
        .get("https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id")
        .then(function (response) {
            console.log(response);
        });
}

function nestedPromises(){
    axios.get("https://dummyjson.com/products")
        .then(function (response) {
            console.log("Got 1st response nested");
            axios.get("https://dummyjson.com/products")
                .then(function (response) {
                    console.log("Got 2nd response nested");
                    axios.get("https://dummyjson.com/products")
                        .then(function (response) {
                            console.log("Got 3rd response nested");
                        });
                });
        });
}


async function awaitPromises(){

    const call1 = await axios
        .get("https://dummyjson.com/products")
        .then(function (response) {
            console.log("Got 1st response await");
        });

    const call2 = await axios
        .get("https://dummyjson.com/products")
        .then(function (response) {
            console.log("Got 2nd response await");
        });

    const call3 = await axios
        .get("https://dummyjson.com/products")
        .then(function (response) {
            console.log("Got 3rd response await");
        });

}