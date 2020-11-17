

//ForEach - iteração de cada item dentro de um array
const arr = [1,2,3,4,5];

arr.forEach((value, index, array) => {
    console.log(`${index}: ${value}`);
    console.log(array);
});


//Map - retorna um novo array, de mesmo tamanho, iterando cada item de um array
console.log(arr.map((value, index) => value * index));

//Flat - retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada
const subArray = [['Alana', [19, ['16/09/2001']]], ['Gustavo', [21, '15/12/1998']], ['Amanda', [25, '19/05/1997']]];
const sub = subArray.flat(2);
console.log(sub);
console.log(subArray);


//flatMap - retorna um novo arry assim, como a função map e excuta um flat de profundidade 1
console.log(arr);
console.log(arr.flatMap((value, index) => [value * index ]));
console.log(arr.flatMap((value, index) => [[value * index ]]));


//Key - contém as chaves para cada elemento de array
const arrInterator = arr.keys();

console.log(arrInterator.next());

console.log(arrInterator.next());

console.log(arrInterator.next());

console.log(arrInterator.next());

console.log(arrInterator.next());

console.log(arrInterator.next());

console.log(arrInterator.next());