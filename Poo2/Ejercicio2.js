/**
 * empresa de transporte que gestiona vehiculos
 */
class Vehiculo{
    constructor(marca, modelo){
        this.marca=marca
        this.modelo=modelo
    }

    describir(){
        console.log(`Vehiculo general= Marca: ${this.marca}, Modelo: ${this.modelo}.`) 
    }

    static Motorizado(clase, estado){
        let motor
        if(estado==true){
            motor="Es motorizado"
        }else{
            motor="No es motorizado"
        }
        
        return `${clase.marca} - ${motor}`
    }
}




class Auto extends Vehiculo{

    constructor(marca, modelo, tipo, nPuertas){
        super(marca, modelo)
            this.marca=marca
            this.modelo=modelo
            this.nPuertas= nPuertas
    }

    describir(){
        console.log(`El Auto, tiene marca ${this.marca} y el modelo es ${this.modelo} y tiene ${this.nPuertas} puertas.`)
    }
}

class Bicicleta extends Vehiculo{
     
    constructor(marca, modelo, tipo, luces){
        super(marca, modelo);
        // this.marca=marca
        // this.modelo=modelo
        this.luces= luces
    }

    describir(){
        console.log(`La bicicleta, tiene marca ${this.marca} y el modelo es ${this.modelo} y tiene ${this.luces} luces.`)
    }

    //sobreescribir un metodo estatico 
     //Vehiculo.Motorizado(false)
     //Bicicleta.Motorizado(bandera)
}


let auto= new Vehiculo("modelo1", "marca1")
auto.describir()

let bicicleta= new Bicicleta("marca2", "modelo2","luz1")
bicicleta.describir()

console.log(Vehiculo.Motorizado(bicicleta, false))
console.log(Vehiculo.Motorizado(auto, true))


// console.log("Motorizado = " + Vehiculo.Motorizado(false))