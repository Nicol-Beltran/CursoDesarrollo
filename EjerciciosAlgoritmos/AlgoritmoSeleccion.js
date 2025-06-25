//Recorre el arreglo para encontrar el elemento minimo
//Intercambia el minimo con el primer elemento no ordenado
//Repite para el siguiente elemento no ordenado

const arreglo=[2,6,1,4]  
//1 6 2 4
let permuta=0
let valorMinimo=0
let posicion=0
for (let i = 0; i < arreglo.length; i++) {
    // if(arreglo[i] < arreglo[i+1]){
    //     valorMinimo= arreglo[i]
    //     posicion=i
    //     permuta=arreglo[i]
    // }

    for (let j = 0; j < arreglo.length; j++) {
        if(arreglo[i]<arreglo[i+1]){
            permuta=arreglo[i]
            arreglo[i] = arreglo[i+1]
            arreglo[i + 1]= permuta

        }

        
    }
        console.log(arreglo)

    
}

console.log(arreglo)


console.log("Valor minimo:" + valorMinimo)
console.log("Posicion del valor minimo:" + posicion)