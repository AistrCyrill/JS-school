function findValueInArray(a) {
    // if (a === undefined) a = [];
    // a = a || [];
    return a.indexOf('someValue');
}

/* const BASIC_COEF = 1.8;

function addBets(bet1, bet2) {
    return bet1 + bet2;
}
const totalIn = addBets(1);
function placeBet(coef) {
    return totalIn * coef;
}

console.log('Placed bet', placeBet(BASIC_COEF))*/

//defaultParameterAsExpression
// ((() => 2)()); 
const defaultParameterAsExpression = (num1, num2 = num1 * 2) => ({
    num1,
    num2
});
console.log(defaultParameterAsExpression(1))