const fs = require('fs')
const path = require('path')
const basePath = './assets'

console.log('Begin')


// function cb (err, data){
//     if(err) 
//         throw err
//     console.log(data)
// }

function cb (err, data, index, max){
    if(err) 
        throw err
    console.log(data)
    return start(index + 1, max)
}

// const content = fs.readFileSync(path.resolve(basePath, 'poema.txt'))
// console.log(content.toString())


// const files = fs.readdirSync(path.resolve(basePath))
// const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))
// for (const sentence of sentences) {
//     const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
//     console.log(text)
        //outra opcao
//     fs.readFile(path.resolve(basePath, sentence), {encoding: 'utf-8'}, cb)
// }

// fs.readFile(path.resolve(basePath, 'poema.txt'), {encoding: 'utf-8'}, cb)

// fs.readdir(path.resolve(basePath), (err, files) => {
//     if(err)
//         throw err
    
//     files
//         .filter((file) => /s[1-4].txt/gi.test(file))
//         .forEach((sentenceFile) => {
//             fs.readFile(path.resolve(basePath, sentenceFile), {encoding: 'utf-8'}, cb)
//         })

// })

start(1, 4)

function start(index, max){
    if(index > max)
        return
    
    fs.readFile(
        path.resolve(basePath, `s${index}.txt`),
        { encoding: 'utf-8'},
        (err, data) => cb(err, data, index, max)
    )
}



console.log('End')