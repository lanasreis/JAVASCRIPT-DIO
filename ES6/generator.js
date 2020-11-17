//Generators funções com pausa/despausa através da interação do iterator--------------------------
//forma de construir iteradores


function* hello(){
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('outside!'));


function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it2 = naturalNumbers();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());


const obtGenerator = {
    value:[1,2,3,4],
    *[Symbol.iterator](){
        for(var i = 0; i< this.value.length; i++){
            yield this.value[i];
        }
    }
}

for(let value of obtGenerator){
    console.log(value)
}

