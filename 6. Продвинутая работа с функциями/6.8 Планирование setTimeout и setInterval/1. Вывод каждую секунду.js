function printNumbers(from, to){
    setInterval(()=>{
        if(from > to){

        }else
        console.log(from++);
    },1000)
}

function printNumbersRec(from, to){
    setTimeout(function go() {
        console.log(from);
        if (from < to) {
            setTimeout(go, 1000);
        }
        from++;
    }, 1000);
}

printNumbersRec(1, 10);