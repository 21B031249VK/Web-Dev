function Calculator(){
    this.read = function (){
        this.a = prompt('Enter first value:', '');
        this.b = prompt('Enter second value:', '');
    };
    this.sum = function (){
        return +this.a + +this.b;
    };
    this.mul = function (){
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );