// Requerimiento:
// Crear un pequeño sistema para una biblioteca que
// gestione libros y usuarios.
// Objetivos:
// Diseñar un diagrama de clases.
// Crear las clases en TypeScript con tipos y
// modificadores adecuados.
// Instanciar objetos y simular acciones.
// Clases sugeridas:
// Libro: titulo, autor, isbn, disponible
// Usuario: nombre, email, librosPrestados, pedirLibro

class Libro{
    constructor(titulo, autor, isbn, disponible){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
}

class Usuario{
    constructor(nombre, email, librosPrestados){
        this.nombre = nombre;
        this.email = email;
        this.librosPrestados = librosPrestados;
    }

    pedirLibro(libro){
        if(libro.disponible){
            this.librosPrestados.push(libro);
            libro.disponible = false;
            console.log(`El libro ${libro.titulo} ha sido prestado a ${this.nombre}`)
        }
        else{
            console.log(`Lo siento, el libro ${libro.titulo} no está disponible`)
        }
    }
    
    DevolverLibro(libro){
        // includes verifica si el libro existe dentro del arreglo librosPrestados
        if(this.librosPrestados.includes(libro)){
            // indexOf obtiene la posición del libro dentro del arreglo
            // splice elimina un elemento a partir de ese índice (en este caso, el libro)
            this.librosPrestados.splice(this.librosPrestados.indexOf(libro), 1)
            libro.disponible = true;
            console.log(`El libro ${libro.titulo} ha sido devuelto`)
            }
            else{
                console.log(`Lo siento, el libro ${libro.titulo} no ha sido prestado`)
            }
    }
}


const libro1= new Libro("100 años de soledad", "Gabriel Garcia Marquez", 10, true)
const libro2= new Libro("El principito", "Antoine de Saint-Exupéry", 20, true)

const usuario1 = new Usuario("Juan", "juan@gmail.com", []);
usuario1.pedirLibro(libro1)
usuario1.DevolverLibro(libro1)
console.log(usuario1.librosPrestados)

const usuario2 = new Usuario("Maria", "maria@gmail.com", []);
usuario2.pedirLibro(libro1)
