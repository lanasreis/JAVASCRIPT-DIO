//fetch requisições-------------------------------------------------------------------------

// fetch('/data').then(responseStream => {
//                     console.log(responseStream);
//                     responseStream.json()
//                             .then(data => {
//                                 console.log(data)
//                             })
//                 }).then(data => {
//                         console.log(data)    
//                     }).catch(err => {
//                             console.log(err);
//                         });


// ES7 - Async/Await --------------------------------------------------
// Promisse resolvida

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000)
});

const simpleFunc = async () => {
    // throw new Error('Oh no!');
    const data = await asyncTimer();
    return data;
};

console.log(simpleFunc());
simpleFunc()
    .then(data => console.log(data))
    .catch(err => console.log(err));


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('User Logger', data => {
//     console.log(data)
// })

// emitter.emit('User Logged', {user: 'Celso '})