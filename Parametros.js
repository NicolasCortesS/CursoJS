//Parámetros por default "persona desconocida"

const saludar = (nombrePersona = "persona desconocida") => `Hola ${nombrePersona}`;

console.log(saludar("Nicolas"));


const edad = (edad, nombre = "unknown person") => {
    age = 2024 - edad;
    return `Hola ${nombre}, tu edad es: ${age}`;
}

console.log(edad(1999,"Nicolás"));