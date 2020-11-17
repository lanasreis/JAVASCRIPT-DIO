//join - junta todos os elemtnos de um array, sepaarados por um delimitador e retorna uma string
const arr = [1,2,3,4];
console.log(arr.join('<->'));

//reduce - retorna um novo tipo de dado iterando cada posição de um array
console.log(arr.reduce((total, value, index) => total += (value*index), 0 ));
