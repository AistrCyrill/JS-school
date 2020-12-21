divideBy2(2)
function divideBy2(x) { return x / 2; }
let m = divideBy2;

console.log(divideBy2(4));
console.log(m(4));

// As object method
const Object = {
    a: divideBy2
}
console.log(Object.a(4));

const someFunction = (x) => x * x;
let a = [someFunction, 10]; // An array literal 
a[0](a[1]) // => 100

console.log(a[0](a[1]))

// Why typeof Function not Object if it is object in language?

const functionThatTakeOtherFunction = function (fn) {
    if (typeof fn === 'function') {
        fn(4);
    } else {
        console.log(fn)
    }
}
functionThatTakeOtherFunction(console.log)
functionThatTakeOtherFunction(10)



