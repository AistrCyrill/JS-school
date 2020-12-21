const Object = {
    a: '12',
    m: function () {
        console.log(this.a);
        /*        nested();
                function nested() {
                    console.log(this.a)
                }*/
    },
    arrowMethod: () => {
        console.log(this.a) // this in this case is window
    },
    working() {
        return () => console.log(this.a)
    }
}

Object.m();
Object.working()();