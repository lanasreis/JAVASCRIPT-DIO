'use strict';

const myText = String('Hello prototype!');
console.log(myText.split(''));
console.log(myText.__proto__.split === myText.split && myText.__proto__.split === String.prototype.split);
console.log(myText.constructor === String);

// __proto__ -> prototype -> constructor
// myText.constructor -> String
// myText.__proto__ -> String.prototype 

function Animal() { 
    this.qtdPatas = 4;
}

console.log(`Constructor função Animal eh: ${Animal.constructor}`);

const cachorro = new Animal();
console.log(cachorro.qtdPatas);
console.log(cachorro.__proto__ === Animal.prototype);
console.log(Function.prototype === Animal.__proto__);
console.log(cachorro instanceof Animal);
console.log(cachorro instanceof Function);

/*  O QUE O NEW FAZ???

1 - Um objeto é criado, herdando Animal.prototype
2 - A função construtora Animal é chamada com os argumentos especificados e com o `this` vinculado ao novo objeto criado
3 - Caso a função construtroa tenha um retorno explícito, será respeitando o seu `return`, Senão, será retornado o objeto criado na passo 1. 

*/

function Cachorro(morde){
    Animal.call(this, 4);
    
    this.morde  = morde;
    this.latir = function(){
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);
console.log(pug);
/*
    Essa forma de implementar cria funções novas toda vez que implementada
*/


function AnimalProto(){}

AnimalProto.prototype.qtdPatas = 0;
AnimalProto.prototype.movimentar = function(){}

function CachorroProto(morde){
    this.qtdPatas = 4;
    this.morde = morde;
}

CachorroProto.prototype = Object.create(AnimalProto);
CachorroProto.prototype.latir = function(){
    console.log("AU! AU!");
}

const pug = new CachorroProto(false);
const pitbull = new CachorroProto(true);



