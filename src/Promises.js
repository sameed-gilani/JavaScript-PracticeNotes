let countValueReject = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValueReject.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );


let countValueResolve = new Promise(function (resolve, reject) {
    resolve('Promise resolved');
});

// executes when promise is resolved successfully
countValueResolve.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );
