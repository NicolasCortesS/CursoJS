function saludar(nombrePersona) {

    return `Hola ${nombrePersona}`;

};

let nombre = saludar("Nicolas");

console.log(saludar("Salvador"));

//Arrow Functions

const sumar = (n1,n2) => n1 + n2;

console.log(sumar(10,20));
