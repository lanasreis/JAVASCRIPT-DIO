//PUSH adiciona(final)
const frutas = ['Mamão', 'Laranja'];

console.log(frutas);
console.log(frutas.push('Banana'));
console.log(frutas);

//POP remove(final)_
console.log(frutas.pop());
console.log(frutas);



//UNSHIFT adiciona(inicio)
console.log(frutas.unshift('Morango'));
console.log(frutas);

//SHIFT remove(inicio)
console.log(frutas.shift());
console.log(frutas);



//CONCAT retorna novo array resultado da junçãod e dois arrays
const verduras = ['jiló', 'quiabo', 'abóbora'];
const verdurasAndFrutas = frutas.concat(verduras);

console.log(verdurasAndFrutas);



//SLICE
const fatia = verdurasAndFrutas.slice(-2);
console.log(fatia);



//SPLICE
const arrSplice = [1,2,3,4,5];

console.log(arrSplice);
console.log(arrSplice.splice(2)); // remove apartir da 2 posicao 
console.log(arrSplice);
console.log(arrSplice.splice(0,0,'first')); //não remove nenhum, na primeira posicao coloca first
console.log(arrSplice);