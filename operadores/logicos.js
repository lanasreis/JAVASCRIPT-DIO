//AND lógico (&&)
//exp1 && exp2
var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = "Gato" && "cao";   // t && t retorna Cao
var a5 = "Gato" && false;   // t && f retorna false
var a5 = false && "Gato";   // t && f retorna false



//OR lógico (||)
//exp1 || exp2
var o1 = true || true;      // t || t retorna true
var o2 = true || false;     // t || f retorna true
var o3 = false || true;     // f || t retorna true
var o4 = false || false;    // f || t retorna false
var o5 = "Gato" || "cao";   // t || t retorna Gato
var o6 = "Gato" || false;   // t || f retorna Gato
var o7 = false || "Gato";   // t || f retorna Gato



//NOT lógico (!)
// !exp1
var n1 = !true;      // !t retorna false
var n2 = !false;     // !f retorna true
var n3 = !"Gato";    // !t retorna false

