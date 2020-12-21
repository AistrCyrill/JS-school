const sum = (x, y) => { return x + y };
// const sum = (x, y) => x + y
// fucntion 

// if one parameter
// x^2
const oneParameter = x => x ** 2;


// No parameters at all

const noParametersAtAll = () => 'some value';

const returnObject = () => { return { a: 1 } };

// Parsed as labeled statement.
const returnObjectWrong = () => { c: 2 }
console.log(returnObjectWrong())

const returnObjectRight = () => ({ a: 2 })

console.log(returnObjectRight());


const returnObjectRight_2 = () => { return { a: 3 } }
console.log(returnObjectRight_2());



const multiply = [1, 2, 3].map(x => x * 2);

const fltered = [1, 2, 3, null, 4].filter(x => x !== null);


// Nested functions

function outerFunction(a, b) {
    function innerFunction(x) { return x * x };
    return innerFunction(a) + innerFunction(b)
}

console.log(outerFunction(2, 3));