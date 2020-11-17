
//ANTIGAMENTE
function multiply(a, b){
    // b = b || 1;//b == 0? retorna 1
    b = typeof b === 'undefined' ? 1 : b; 
    return a*b;
}

console.log(multiply(5, 0));
console.log(multiply(5, undefined));

//ES6---------------------------------------------------------------------------
function mult(a=2, b=a){
    return a*b;
}

console.log(mult(5));
console.log(mult(undefined, undefined));




//lazy evaluation-------------------------------------------------------------------

function randomNumber(){
    return Math.random()*10;
}

console.log(randomNumber());

function multiRandom(a=2, b=randomNumber()){
    return a*b;
}

console.log(multiRandom(5));
console.log(multiRandom(5, undefined));
