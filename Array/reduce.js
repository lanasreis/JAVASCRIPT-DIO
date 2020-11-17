const pets =[
    {
        name: 'rex',
        type: 'dog',
        age: 3
    },
    {
        name: 'pachoca',
        type: 'dog',
        age: 4
    },
    {
        name: 'pretinha',
        type: 'dog',
        age: 11
    },
    {
        name: 'leisse',
        type: 'dog',
        age: 5
    },

    {
        name: 'lara',
        type: 'cat',
        age: 4
    },

    {
        name: 'fiona',
        type: 'cat',
        age: 7
    },
    {
        name: 'pipi',
        type: 'cat',
        age: 1
    },
    {
        name: 'cebolinha',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    },
    {
        name: 'snap',
        type: 'fish',
        age: 2
    },
    {
        name: 'fiu',
        type: 'fish',
        age: 1
    },
    {
        name: 'splash',
        type: 'fish',
        age: 1
    },
    {
        name: 'Lola',
        type: 'dog',
        age: 1
    },
    {
        name: 'Lulu',
        type: 'bird',
        age: 4
    },
    {
        name: 'Lilo',
        type: 'bird',
        age: 2
    },
    {
        name: 'Luna',
        type: 'bird',
        age: 1
    }

]


const qtdDeCachorros = pets
                        .filter((pet) => pet.type === 'dog')
                        .reduce((total, pet) => { return ++total}, 0);

console.log(qtdDeCachorros);

const idadeDog = pets
                    .filter((pet) => pet.type === 'dog')
                    .reduce((atual, pet) => {
                        return {
                            nomesDogs = atual.nomesDogs + " - " + pet.name,
                            totalIdade = atual.totalIdade + pet.age
                        }
                    }, {nomesDogs:'', totalIdade: 0})

console.log(idadeDog);
