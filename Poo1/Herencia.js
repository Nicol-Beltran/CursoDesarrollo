class Animal{
    constructor(nombre){
        this.nombre= nombre
    }
    hacerSonido(){
        console.log("Sonido genérico");
    }
}
//Herencia: Cuando una clase se convierte en hija de otra
class Perro extends Animal{
    //polimorfismo : diferentes clases, misma funcion que se usa de diferentes formas
    hacerSonido(){
        console.log("Gua gua")
    }
}

const perro=new Perro("pepe");
perro.hacerSonido();