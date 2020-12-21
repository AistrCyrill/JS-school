const Object = {
    a: '12',
    m: function () {
        console.log(this.a);
        /*        nested();
                function nested() {
                    console.log(this.a)
                }*/
    },
}

Object.m();