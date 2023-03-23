function sumInput(){
    let values = [];
    while (true) {
        let a = prompt('Enter number:', '');
        if (a === '' || a === null || !isFinite(a)){
            break;
        }
        values.push(+a);
    }
    let sum = 0;
    for (let value of values){
        sum += value;
    }
    return sum;
}

alert(sumInput());