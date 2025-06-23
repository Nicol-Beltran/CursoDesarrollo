class Persona{
    #nombre;
    constructor(nombre){
        this.#nombre=nombre;
    }

    saludar(){
        console.log(`Hola soy ${this.#nombre}`);
    }
     getNombre(){
        return this.#nombre;
     }
     setNombre(nuevoNombre){
        this.#nombre=nuevoNombre;
     }
}


const p= new Persona("carlos");
p.saludar();
//Obtener el valor de nombre encapsulado
console.log(p.getNombre());

//Cambiar el valor de nombre encapsulado
p.setNombre("Maria");
console.log(p.getNombre());
p.saludar();    