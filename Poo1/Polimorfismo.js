class Figura{

    calcularArea(){
        console.log("Figura va a calcular area")
    }
}

class Rectangulo extends Figura{
    constructor(alto, ancho){
        super()
        this.alto=alto
        this.ancho=ancho
    }
    calcularArea(){
        console.log("El area del rectangulo es = "+ this.alto * this.ancho)

    }
}

class Circulo extends Figura{
    constructor(radio){
        super()
        this.radio=radio
    }
    calcularArea(){
        console.log("El area del circulo es = "+ Math.PI * (this.radio**2));

    }
}

const rectangulo=new Rectangulo(2,3);
rectangulo.calcularArea();

const circulo=new Circulo(2);
circulo.calcularArea();