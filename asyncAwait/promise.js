// Forma de expressar que uma operação é assíncrona, acontece enquanto o código é executado

const promise = new Promise((resolve, rejact) => {
    setTimeout(() => resolve('End'), 5000)
})

console.log('Begin')
promise.then((text) => console.log(text))

//Or
promise.then(console.log)

//Or
promise.then(
    (resolve) => setTimeout(() => console.log(resolve), 5000),
    (reject) => console.error(reject)
)


// Async - Toda vez que uma function aceita ser executada de forma assíncrona-------------------------------------------------
// informa para compilador que terá operações assíncronas, retorna uma promisse

(async function (){
    console.log('Ola mundo')
    
})()

// (function (){ //IIFE - expressão imediatamente invocada
//     return new Promisse((resolve, reject) => {
//         console.log('Ola mundo')
//         resolve()
//     })
// })()