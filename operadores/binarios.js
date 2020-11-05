//IN
//something in something

var arvores = new Array("pau-brasil", "loureiro", "cedro");
console.log(0 in arvores);                  //existe posição
console.log(2 in arvores);                  //existe posição
console.log(10 in arvores);                 //não existe posição
console.log('pau-brasil' in arvores);       //não existe posição
console.log("length" in arvores)            //existe propriedade


//Objetos predefinidos
console.log("PI" in Math);
var minhaString = new String("coral");
console.log("length" in minhaString);


//Objetos personalizados
var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
}
console.log("marca" in meucarro);


//Instanceof
//objeto instanceof tipoObjeto;

var dia = new Date(2018, 12, 17);
console.log(dia instanceof Date);