let calculator = {
    read(){
        this.a = prompt('Enter first value:', '');
        this.b = prompt('Enter second value:', '');
    },
    sum(){
        return +this.a + +this.b;
    },
    mul(){
        return this.a * this.b;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());