//Recorre el arreglo para encontrar el elemento minimo
//Intercambia el minimo con el primer elemento no ordenado
//Repite para el siguiente elemento no ordenado

/*
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
console.log("Posicion del valor minimo:" + posicion)*/


let ejemplo=[3,5,1,6,7,2]
for (let j = 0; j < ejemplo.length; j++) {
    //tomamos el valor de la posicion segun el recorrido del array
    let datoMin=ejemplo[j];
    //definimos la posicion segun el recorrido 
    let posMin= j

    for (let i = j; i < ejemplo.length; i++) {
        //si el valor minimo es mayor a la posicion del array + 1
        if(datoMin>ejemplo[i+1]){
            //asignale el ejemplo i + 1 a la variable datoMin
            datoMin=ejemplo[i+1]
            //y la posicion va a aumentar segun el cambio de valor minimo que se hizo previamente
            posMin= i+1
            //imprime el valor minimo y la posicion de ese valor minimo
           // console.log("dato:", datoMin, "pos:", posMin);
            
        }        
    }



console.log("dato minimo:", datoMin, "posicion previa:", posMin)
ejemplo[posMin]=ejemplo[j]
ejemplo[j]= datoMin
console.log(ejemplo)
    
}
