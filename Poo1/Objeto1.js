//Creacion clase
class Persona{
    constructor(nombre){
        this.nombre= nombre;
    }

    getNombre(){
        return this.nombre;
    }
}

const persona= new Persona("Carlos");
console.log(persona.getNombre());