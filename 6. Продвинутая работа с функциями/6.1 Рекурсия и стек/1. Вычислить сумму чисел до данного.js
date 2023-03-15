function sumTo(n){
    let sum = 0;
    while(n){
        sum+=n;
        n--;
    }
    return sum;
}

function sumTo_recursion(n){
    if(n === 1) return 1;
    return n + sumTo(n-1);
}

function sumTo_ariphmetic(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo_ariphmetic(100));