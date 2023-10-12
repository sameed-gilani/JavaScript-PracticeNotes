
radi = [3,5,6,4];

const areas = calculateCircleStuff(radi,circleArea);
const circums = calculateCircleStuff(radi,circleCircumference);

console.log(areas);
console.log(circums);

console.log(b);
let b =2;

function calculateCircleStuff(radius, func){

    let output = [];
    for (let i = 0; i < radius.length; i ++){
        let area = func(radius[i]);
        output.push(area);
    }

    return output;
}

function circleArea(r){
    return Math.PI * r **2;
}

function circleCircumference(r){
    return 2 * Math.PI * r;
}