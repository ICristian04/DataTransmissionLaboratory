function getFibonacci(n){
    if(typeof n !== "number" || (n < 1 || n > 10) ){
        console.log("Not allowed!");
        return;
    }
    const fibo = [];
    for(let i = 0; i < n; i++){
        if(i <= 1) 
            fibo[i] = 1;
        else{
            var f = fibo[i-1] + fibo[i-2];
            fibo[i] = f;
        }
    }
    console.log(fibo);
    return fibo;
}

function testFibo(){
    getFibonacci(1);
    getFibonacci(2);
    getFibonacci(5);
    getFibonacci("Apples");
    getFibonacci("11");
    getFibonacci(false);
}

testFibo();