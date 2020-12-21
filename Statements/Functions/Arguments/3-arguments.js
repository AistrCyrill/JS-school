function argumentsInsteadRest(x) {
    // Array-like object. Will be covered in the Object lesson later.
    // console.log('Arguments', arguments, typeof arguments, Array.isArray(arguments));
    console.log(arguments);
    for (let i of arguments) {
        console.log(`${i}`)
    }
}


argumentsInsteadRest(10)