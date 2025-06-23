class Rectangulo{
    constructor(alto, ancho){
        this.alto=alto
        this.ancho=ancho
    }

    //Getter
    get area(){
        return this.calcularArea();
    }

    //Metodo
    calcularArea(){
        return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 20);
console.log(cuadrado.calcularArea);
console.log(cuadrado.area);