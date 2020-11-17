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


const petNames = pets.map((pet) =>{
    return pet.name;
})
// Map
// Retorna um novo array com a mesma qtd de elementos do original

console.log(petNames);
console.log(pets)



const forEachPetNames = [];

pets.forEach((pet) =>{
    forEachPetNames.push(pet.name);
})
console.log(forEachPetNames);
// Foereach
// NÂO retorna um novo array com a mesma qtd de elementos do original

// console.log(petNames);
// console.log(pets)
