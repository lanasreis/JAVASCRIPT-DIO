//Symbols - indetificador único, não pode ser adivinhado nem descrito

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId);
console.log(uniqueId2);
console.log(uniqueId == uniqueId2);

//propriedades privadas
const obj = {
    [uniqueId]: 'Hello' 
};

console.log(obj);
Object.keys(obj);
Object.getOwnPropertySymbols(obj);


//Well Know symbols
Symbol.iterator;
Symbol.split;
Symbol.toPrimitive;
Symbol.asyncIterator;


const arr = [1,2,3,4];
const str = 'Digital Innovation one';

for(let value of arr){
    console.log(value);
}

const arr2 = [...arr, ...str];

const objSymbol = {
    value: [1,2,3,4],
    [Symbol.iterator](){
        let id = 0;
        return {
            next: () => {
                id++;
                return {
                    value: this.value[id-1],
                    done: id > this.value.length
                }
            }
        }
    }
}

const it = objSymbol[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let value of objSymbol){
    console.log(value)
}

const arrSymbol = [...objSymbol];
console.log(arrSymbol);
// const iterator = arr[Symbol.iterator]();


// console.log(iterator);

// // while(true){
// //     console.log(iterator.next());
// //     if(iterator.done){
// //         break;
// //     }
// // }

// const obj2 = {
//     [Symbol.iterator()]{

//     }
// } TRAVA