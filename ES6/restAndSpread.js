function sum(a, b){
    return a+b;
}

console.log(sum(5, 3));


function sumArrays(a, b){
    var value =0;
    for(var i=0; i < arguments.length; i++){
        value+=arguments[i];
    }
    return value
}

console.log(sumArrays(2, 5, 67, 45));


//ES6 Rest operator(...)  -----------------------------------------------------------------
// strings, arrays, objects, objetos iteraveis


const mult = (...args) => {
    return args.reduce((acc, arg) => acc *= arg, 1);
} 

const sumRest = (primeiro, segundo,...args) =>{
    // console.log("Multiplos:" + mult.apply(undefined, args)); //ANTES do SPREAD
    console.log(primeiro, segundo, args);
    return args.reduce((soma, valor) => soma +=valor, 0);
}


console.log(sumRest(1, 20, 30,40,10))


//ES6 SPREAD operator(...)  -----------------------------------------------------------------
// strings, arrays, objects, objetos iteraveis


const multSpread = (...args) => {
    return args.reduce((acc, arg) => acc *= arg, 1);
} 

const sumSpread = (...args) =>{
    console.log("Multiplos:" + multSpread(...args)); // SPREAD
    console.log(args);
    return args.reduce((soma, valor) => soma +=valor, 0);
}


console.log(sumSpread(1,2,3,4,5))


// ------------------------------------------------------------------------------

const str = 'digital innovation on';
const arr = [1,2,3,4,5];
const arr2 = arr.concat([6,7,8]);
const arr3 = [...arr2, 10, 12, 13];

function LogArgs(...args){

    console.log(args, arguments);
}

LogArgs(...str);//Array de caracteres
LogArgs(...(str.split(" ")));
LogArgs(...arr);

console.log(arr2);
console.log(arr3);


const obj = {
    test: 123,
    subObj: {
        teste: 123
    }
};

const obj2 = {
    ...obj,
    test2: 'ola'
    //subObj: {...obj.subObj} //naço alter\
}

obj2.subObj.teste = 'Alterei do primeiro tambem'

// const arr = [...obj2]; //não pode, não é iterável

console.log(obj, obj2);

const referencia1 = {
    printf:'Primeira Referencia'
}

const referencia2 = referencia1; // {...referencia1}

referencia2.printf = 'Alterei referencia 1 tambem';
console.log(referencia1, referencia2);
