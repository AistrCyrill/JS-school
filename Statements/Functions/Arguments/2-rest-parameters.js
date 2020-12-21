function moreParametersThenNeeded(first, ...resParameters) {

    console.log(resParameters);
    for (let i of resParameters) {
        console.log(`${i}`)
    }
}

// moreParametersThenNeeded(1, 2, 3)
// moreParametersThenNeeded(1)
moreParametersThenNeeded(0)

