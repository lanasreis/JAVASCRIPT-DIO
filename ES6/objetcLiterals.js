var prop1 = 'Digital Innovetino one'

var obj = {
    prop1: prop1,
    sum: function sum(a, b){
        return a+b;
    } 
}

console.log(obj);
console.log(obj.sum(9, 6));


var propName = 'name';
var obj1 = {}

obj1[propName + ' Completo'] = 'Alana Soares Reis'
console.log(obj1);

//ES6 ---------------------------------------------------------
var prop1Es6 = 'Digital Innovetino one'
var method1 = ()=> console.log('method called');


var objEs6 = {
    prop1Es6,
    method1,
    sum(a, b){
        return a+b
    },
    [propName + ' e Sobrenome']: 'Alana Reis'
};

console.log(objEs6);
objEs6.method1();
console.log(objEs6.sum(23, 34));
console.log(objEs6);



