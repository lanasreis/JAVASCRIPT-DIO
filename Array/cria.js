/* CRIAR ARRAY */
const arr = [1,2,3];
console.log(arr);


const arr2 = new Array(4,5,6);
console.log(arr2);

//ARRAY OF - cria nova instância a partir do número de parâmetros
const persons = Array.of('Alana', 'Gustavo', 'Denise', 'Adriano', 'Amanda');
console.log(persons);

const numbersAndStrings = Array.of(1, 'one', 2, 'two', 3, 'three');
console.log(numbersAndStrings);


//ARRAY
const arr_3pos = Array(3);      //cria 3 posições vazias
const arrNumbers = Array(3,4,5);

console.log(arr_3pos + "\n" + arrNumbers);


//ARRAY FROM - cria a partir de um parâmetro array-like ou iterable object
/*
const divs = document.querySelectorAll('div');
const arr_divs = Array.from(divs);

//NÃO É ARRAY, é um node list, não tem funções de array 
*/
