var arr = ['Apple', 'Banana', 'Orange'];

var one = arr[0];
var two = arr[1];
var tree = arr[2];

//ES6 Destructuuring Assigmente -----------------------------------------------------------------------------------
var [oneDesc, twoDesc, treeDesc, numbers] = [
    'Apple',
    'Banana', 
    'Orange', 
    [1,2,3,4]
];

console.log(one, oneDesc);
console.log(two, twoDesc);
console.log(tree, treeDesc);
console.log(numbers);


var obj = {
    name:'Celsio',
    props: {
        age:23
    }
}

var {name: name2} = obj;
console.log(name2);

var {props: { age }} = obj;
console.log(age);