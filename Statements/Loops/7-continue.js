const data = [1, 2, undefined, 3];
let total = 0;

try {
    for (let i = 0; i < data.length; i++) {
        if (!data[i]) continue;
        // if (i === 3) continue;
        // if (i === 1) break;


        total += data[i];
    }
}
catch (e) {
    console.error(e);
}

console.log(total)