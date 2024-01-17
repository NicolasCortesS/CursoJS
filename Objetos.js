let persona = {
    nombre: "Nicolás",
    apellido: "Cortés",
    email: "ncortes.silva88@gmail.com",
    edad: 24,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
 }


console.log(persona.lang)
persona.lang = "en";
console.log(persona.lang)

function Personaje(Nombre,Faccion,Raza,Clase){
    this.nombre = Nombre;
    this.faccion = Faccion;
    this.raza = Raza;
    this.clase = Clase;
}

let menpho = new Personaje("Menpho","Horda","Trol","Mago")
let titin = new Personaje("Titin","Horda","Goblin","Monje")

console.log(menpho);
console.log(titin);

let personajeMenpho = Object.values(menpho);

for( let x = 0; x<personajeMenpho.length; x++){
    console.log(personajeMenpho[x])
}
