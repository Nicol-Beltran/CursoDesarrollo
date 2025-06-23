class Motor{
    constructor(){
        this.encendido= false
    }

    arrancar(){
        this.encendido= true;
        console.log("El motor está encendido");
    }

    detener(){
        this.encendido= false;
        console.log("El motor está apagado");
    }
}


class Auto{
    constructor(){
        this.motor=new Motor(); //Composicion: El auto tiene un motor
    }

    encenderAuto(){
        this.motor.arrancar();
    }

    apagarAuto(){
        this.motor.detener();
    }
}

const auto1= new Auto();
auto1.encenderAuto();
auto1.apagarAuto();