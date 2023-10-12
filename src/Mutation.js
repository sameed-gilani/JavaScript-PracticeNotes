// testingMutation();
// shallow();
// deep();

function deep(){
    const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

    const deepCopy = JSON.parse(JSON.stringify(obj));

    deepCopy.name = 'Version 2';
    deepCopy.additionalInfo.version = 2;

    console.log(obj); // { name: 'Version 1', additionalInfo: { version: 1 } }
    console.log(deepCopy); // { name: 'Version 2', additionalInfo: { version: 2 } }
}

function shallow(){

    const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

    const shallowCopy1 = { ...obj };
    const shallowCopy2 = Object.assign({}, obj);

    shallowCopy1.name = 'Version 2';
    shallowCopy1.additionalInfo.version = 2;

    shallowCopy2.name = 'Version 2';
    shallowCopy2.additionalInfo.version = 2;

    console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
    console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
    console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

}


function testingMutation(){

    let intItemOne = 1;
    let intItemTwo = 1;

    let strItemOne = "Hello";
    let strItemTwo = "Hello";

    let objItemOne = {"Hello":1};
    let objItemTwo = {"Hello":1};

    console.log(intItemTwo === intItemOne);
    console.log(strItemOne === strItemTwo);
    console.log(objItemTwo === objItemOne);


    let refIntItemOne = intItemOne;
    intItemOne = 11;
    console.log(refIntItemOne);


    const food = "cake";
    food[0] = "f";
    console.log(food[0]);
    console.log(food);


    const randomNumbersArray = [1,2,3,4,5,6];
    randomNumbersArray[0] = 0;
    console.log(randomNumbersArray);

    console.log(randomNumbersArray.length);
    randomNumbersArray.length = 2;
    console.log(randomNumbersArray.length);

    console.log(randomNumbersArray);

    const refObjItemOne = objItemOne;
    console.log((refObjItemOne));
    console.log(objItemOne);

    refObjItemOne.Hello = 2;
    console.log((refObjItemOne));
    console.log(objItemOne);


    const newObjItemOne = {number: 4};
    const copyNewObjItemOne = {...newObjItemOne};

    console.log(newObjItemOne);
    console.log(copyNewObjItemOne);

    copyNewObjItemOne.number = 5;

    console.log(copyNewObjItemOne);
    console.log(newObjItemOne);

}
