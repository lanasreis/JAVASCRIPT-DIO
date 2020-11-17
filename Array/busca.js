//Find - retorna o primeiro item de um arry que satisfaz a condição

const arr = [1, 2, 13, 14, 15];

console.log(arr.find( value => value >2)); 


//FindIndex - retorna a posição do primeiro item de um arry que satisfaz a condição
console.log(arr.findIndex( value => value === 1));


//Filter - retorna um novo array com todos os itens que satisfazem a condição
console.log(arr.filter( value => value > 2));


//indexOf - retorna o primeiro index em que um elemento pode ser encontrado no array
console.log(arr.indexOf(14));


//includes - retorna um booleano verificando se determinado elemento existe no array
console.log(arr.includes(13), arr.includes(3));


//some - retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
console.log(arr.some(value => value%43 ==0));


//every - retorna um booleano verificando se todos os itens de um array satisfazem a condição
console.log(arr.every(value => value%2 === 0), arr.every(value => value>0));