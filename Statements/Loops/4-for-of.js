let moduleOne = (function () {
    const innerValue = 10;
    return {
        innerValue,
    }
})();



// console.log(greeter)

const myInstance = moduleOne
console.log(myInstance.innerValue);


let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for (let element of data) {
    sum += element;
}

//  Cannot do with the objects itself !
// let o = { x: 1, y: 2, z: 3 };

// for (let element of o) {
//     // Throws TypeError because o is not iterable
//     console.log(element);
// }
// Symbol.iterator

//  FOR OF can iterate strings in ES6

for (let letter of "kyiv") {
    console.log(letter.toUpperCase())
}