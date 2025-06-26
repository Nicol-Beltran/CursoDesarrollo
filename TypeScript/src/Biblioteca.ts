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

class Usuario{
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

    devolverLibro(libro:Libro){
        const resultado = this.librosPrestado.filter(elemento=> libro==elemento)
        if(resultado.length>0){
            libro.disponible= true
            console.log(`${libro.titulo} ya lo devolvio ${this.nombre}`)
        }
    }
}


let libro1 = new Libro("Mario bros","creador de mario", 10, true)
console.log(libro1)