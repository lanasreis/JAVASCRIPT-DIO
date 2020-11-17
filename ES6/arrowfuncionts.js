//Arrow Functions  (Flecha) =>
// Funções anônimas


var sumOld = function(a, b){
    return a+b;
}

var sum = (a, b) => a+b;//{ return a+b }

var dobra = a => a*2;

console.log(sumOld(5, 15), sum(12, 13), dobra(9));


//Objetos literais--------------------------------------------------
var obj = {
    name:'Alana',
    age: '19'
};

var objFunction = (name, age) => ({name, age});
console.log(objFunction('Alana', 13));


//Função Construtora------------------------------------------------
function Car(){
    this.foo = 'Citroen'
}

// var CarArrow = () => {this.foo = 'Citroen'};

console.log(new Car());
// console.log(new CarArrow()); //ERRO


// Arrow Funciotns NÃO tem Hosting-----------------------------------
log('teste')

function log(valor){
    console.log(valor);
}

// logArrow('tesste');
var logArrow = (valor) => console.log(valor);
logArrow('tesste');




// Outras utilidades------------------------------------------

var obj = {
    showContext: function showContext(){
        var __that = this;
        this.log('this Log');

        setTimeout(function(){
            this.log('after 1000ms');
            __that.log('That after 1000ms')
            console.log(this);
        }.bind(this), 1000);
    },
    log: function log(value){
        console.log(value);
    }
};


var objArrow = {
    showContext: () => {
        setTimeout(() => {
            this.log('after 1000ms');
            console.log(this);
        }, 1000);
    },
    log: value => {
        console.log(value);
    }
};

obj.showContext();
objArrow.showContext();
