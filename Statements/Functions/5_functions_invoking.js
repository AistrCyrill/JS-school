
// Method

const a = {
    parameterA: 'parameterA'
};

const m = function (x) {
    console.log('Passed parameter is', this);
}

a.method = () => console.log('I am called', this)
a.secondMethod = m;

a.secondMethod('username');
a.method();


// Method chainings - in Objects.


// a is - context of invocation. More about it - later.
// We can acces to the object property with this.
