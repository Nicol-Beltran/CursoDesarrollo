class Libro{
    titulo:string;
    autor:string;
    isbn:number;
    disponible:boolean;

    constructor(titulo:string, autor:string, isbn:number, disponible:boolean){
        this.titulo= titulo
        this.autor= autor
        this.isbn=isbn
        this.disponible=disponible
    }
}

class usuario{
    nombre:string;
    email:string;
    librosPrestado:Libro[]=[]

    constructor(nombre:string, email:string, librosPrestados:Libro[]){
        this.nombre= nombre
        this.email=email
        this.librosPrestado=librosPrestados
    }

    pedirLibro(libro:Libro){    
        if(libro.disponible){
            this.librosPrestado.push(libro);
            libro.disponible=false;
            console.log(`El usuario ${this.nombre}, pidio prestado el libro ${libro.titulo}`)
        }

    }
}


let libro1 = new Libro("Mario bros","creador de mario", 10, true)
console.log(libro1)