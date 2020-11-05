/*
cria uma única instância de uma função construtora e retorn=a-la toda vez em que for necessário utilizá-la.

JQUERY
*/

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}


const p1 = Pessoa.call({
    name: 'Gustavo',
    age: 21
})
console.log(p1);


const p = Pessoa.call({
    name: 'Alana',
    age: 19
})
console.log(p);