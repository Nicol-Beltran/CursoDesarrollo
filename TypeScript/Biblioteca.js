var Libro = /** @class */ (function () {
    function Libro(titulo, autor, isbn, disponible) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
    return Libro;
}());
var usuario = /** @class */ (function () {
    function usuario(nombre, email, librosPrestados) {
        this.librosPrestado = [];
        this.nombre = nombre;
        this.email = email;
        this.librosPrestado = librosPrestados;
    }
    usuario.prototype.pedirLibro = function (libro) {
        if (libro.disponible) {
            this.librosPrestado.push(libro);
            libro.disponible = false;
            console.log("El usuario ".concat(this.nombre, ", pidio prestado el libro ").concat(libro.titulo));
        }
    };
    return usuario;
}());
var libro1 = new Libro("Mario bros", "creador de mario", 10, true);
console.log(libro1);
