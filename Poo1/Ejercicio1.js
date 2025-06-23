//Ejercicio1:Clases y objetos 
//Crear una clase llamada "Persona" con los siguientes atributos: nombre, edad, metodo saludar
//Instancia la clase persona con un nombre y edad
//llama al metodo saludar()

class Persona{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }

    saludar(){
       return console.log(`Hola ${this.nombre}, tienes ${this.edad} año(s).`)
    }

}

const persona=new Persona("Perla", 8 );
persona.saludar();