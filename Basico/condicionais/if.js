const array = [0, 1, 2, 3, 4, 5];
array.forEach(item =>{
    if(item % 2 === 0){
        console.log(`O numero ${item} par`);
    }
    else if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }
    else{
        console.log(`Número ${item} impar não divisível por 3.`);
    }
})