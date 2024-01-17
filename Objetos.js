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


/*for (x in persona){
    console.log(x)
    console.log(persona[x]);
}
    console.log(persona)

 console.log(persona.nombrecompleto())*/




