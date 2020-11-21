const fs = require('fs')
const path = require('path')
const basePath = './assets'
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

// Promisse - representa uma valor que vai ser resolvido no futuro

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 2000)
})

console.log('Begin')

// promise.then((data) => console.log(data)).catch((err) => console.log('Ops', err))
// promise.then(console.log)
// promise.then((resolve) => {}, (reject) => {})

function readFileAsync(path, options){
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if(err)
                return reject(err)
            return resolve(data)
        })
    })
}

readFileAsync(path.resolve(basePath, 'poema.txt'), { encoding: 'utf-8'})
    .then(console.log)
    .catch(console.error)

console.log('End')