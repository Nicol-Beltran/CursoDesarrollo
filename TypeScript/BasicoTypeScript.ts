class Persona{
    nombre:string;
    edad: number;

    constructor(nombre:string, edad:number){
        this.nombre=nombre
        this.edad=edad
    }

    saludar():void{
        console.log(`Hola soy ${this.nombre}`);
    }
}

const p1= new Persona("Estive",30)
p1.saludar()