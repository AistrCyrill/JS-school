function myFunction(argument) {
    // returns undefined, just call console.log
    argument ? console.log("myFunction", argument) : console.log('undefined');

    return Number(argument) > 0 ? argument : 0;

    // return - stops execution
    console.log('I am unreachable piece of code.')
}

// console.log(typeof myFunction);
// myFunction('passed parameter');
// myFunction();

function someOtherFunction(argument) {
    return myFunction(argument);
}
someOtherFunction('parameter');

// Resut of function w/o return = undefined
// console.log(someOtherFunction());


let HOF = (fn, arg) => {
    return fn(arg);
}

console.log(HOF(myFunction, 15));
