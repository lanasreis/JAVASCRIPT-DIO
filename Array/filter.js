const pets =[
    {
        name: 'rex',
        type: 'dog',
        age: 3
    },

    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    },
    {
        name: 'Lola',
        type: 'dog',
        age: 1
    }

]


const eCachorro = (type) => {
    return type === 'dog';
}


const newPets = pets.filter((pet) => {
    return pet.idade < 2;
})

const cachorros = pets.filter(({type}) => eCachorro(type));

console.log(pets);
console.log(newPets);
console.log(cachorros);