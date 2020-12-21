const myFucntion = function (a) {
    return 1;
}
// RO prop
const myFunctionLength = myFucntion.length;

// Will be covered in object part
const myFunctionPrototype = myFucntion.prototype;

const props = {
    type: typeof myFucntion,
    myFunctionLength,
    myFunctionPrototype,
}
console.log(props);



// Arrow function
// const arrowFunc = () => {
//     console.log('Some value')
// }
// const arrowProps = {
//     type: typeof arrowFunc,
//     length: arrowFunc.length,
//     proto: arrowFunc.prototype
// }
// console.log(arrowProps);


// To string
// console.log(arrowFunc.toString());
console.log(myFucntion.toString());


// Cosntructor
// As the function also an object we can create it from constructor
// just for info, not for everyday-usage
const createdFunction = new Function('a', 'b', 'c', "return a + b + c")
console.log(createdFunction(1, 2, 3))