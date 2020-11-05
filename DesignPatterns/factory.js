/*
Funções que retornam um objeto, sem a necessidade de chmá-las com o new.
*/

//Exemplo NÃO factory
function FakeUser(){
    this.name = 'Guilherme';
    this.lasname = 'Cabrini';
}
const user = new FakeUser();


//Exemplo factory
function FakeUserFactory(customProperties){
    return{
        name: 'Guilherme',
        lasname: 'Gabrini',
        ...customProperties
    }
}
const userFac = FakeUserFactory({name: 'Alana', age: 19});

console.log(user);
console.log(userFac);