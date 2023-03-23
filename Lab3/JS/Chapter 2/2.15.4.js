function pow(a, b){
    let p = a;
    for(let i = 0; i < b; i++){
        p = p * a;
    }
    return p;
}

let x = prompt('Enter value of x:', '');
let n = prompt('Enter value of n:', '');

if(n < 1){
    alert('Power ${n} is not supported');
} else {
    alert(pow(x, n));
}

//pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1