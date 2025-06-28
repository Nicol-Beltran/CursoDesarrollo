//una tienda de videojuegos retro necesita que desarrolles un sistema para manejar un inventario

class Inventario{
    constructor(titulo, consola, anio_lanzamiento, precio){
        this.titulo=titulo
        this.consola= consola
        this.anio_lanzamiento=anio_lanzamiento
        this.precio=precio
    }

    //Mostrar juegos de una consola en especifica
    static MostrarJuegoPorConsola(listaJuegos,consola){

        const FiltrarJuego= listaJuegos.filter((listaJuego) => listaJuego.consola == consola )
        console.log(`La lista filtrada por la consola ${consola} = `)
        return FiltrarJuego
    }

    //Ordenar los videojuegos por año lanzamiento
    static OrdenarVideojuegosPorAnio(listaJuegos){
        const Ordenar= listaJuegos.sort(function(a,b){
            if(a.anio_lanzamiento<b.anio_lanzamiento){
                return -1
            }
            if(a.anio_lanzamiento>b.anio_lanzamiento){
                return 1
            }
            else{
                return 0;
            }

        })
        console.log("Lista ordenada por año de lanzamiento=")
        return Ordenar
    }


    //Calcular el valor total del inventario
    static ValorTotalInventario(listaJuegos){
        //reduce
        let total= listaJuegos.reduce((obj,item)=> {
            //Buscar elemento en arreglo y 
            let encuentra = obj.findIndex(existe => existe.precio == item.precio);
            if (encuentra < 0){
                obj.push({ precio: item.precio, quantity:1});
            } else{
                obj[encuentra].quantity ++;
            }
            return obj;

        },[]);
        return total;//TO DOOO

        
    }

    

    //imprimir los nombres de los videojuegos  (map) y (foreach)
    static ImprimirNombresJuegos(listaJuegos){

    }

}

class JuegoColeccionista extends Inventario{
    constructor(titulo, consola, anio_lanzamiento, precio, rareza){
        super(titulo, consola, anio_lanzamiento, precio)
        this.rareza= rareza
    }

    //rareza baja,media, alta  segun el precio asi mismo se maneja la rareza
}

//lista de videojuegos de distintas consolas
const inventario1=new Inventario("Super Mario Bros", "Nintendo Wii", 2000, 5000)
const inventario2=new Inventario("Pacman", "Game Boy Micro", 2005, 3000)
const inventario3=new Inventario("Tetris", "Nintendo DSi", 2008, 2000)
const inventario4=new Inventario("Donkey kong", "Game Boy", 1988, 7000)
const inventario5=new Inventario("La leyenda de Zelda", "Wii Mini", 2012, 10000)
const inventario6=new Inventario("Mega Man", "Nintendo Switch", 2017, 15000)
const inventario7=new Inventario("Final fantasy", "Nintendo DS", 2017, 8000)
const inventario8=new Inventario("Plantas VS Zombies", "Nintendo DS", 2004, 11000)


const listaJuegos=[inventario1,inventario2,inventario3,inventario4,inventario5,inventario6,inventario7,inventario8]

//Filtrado por consola 
console.log(Inventario.MostrarJuegoPorConsola(listaJuegos, "Nintendo DS"))

//Ordenar por año de lanzamiento
console.log(Inventario.OrdenarVideojuegosPorAnio(listaJuegos))

console.log(Inventario.ValorTotalInventario(listaJuegos))
//console.log(itemColor(miArray));



