//static-metodo estatico para una clase, son llamado sin instanciar la clase  y no 
//pueden ser llamados mediante una instancia de una clase

class Punto{
    constructor (x,y){
        this.x=x;
        this.y=y;
    }

    static distancia(a,b){
        const dx=  a.x -b.x;//8 - 5 = 3
        const dy = a.y - b.y;//7 - 4 = 3
                        //9    18   9
        return Math.sqrt(dx * dx + dy * dy); //raiz cuadrada de 18
        //4,2426...
    }
}

const p1= new Punto(8, 7);
const p2=new Punto(5, 4);

console.log(Punto.distancia(p1,p2));