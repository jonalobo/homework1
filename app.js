/*
1-Declarar una clase Usuario.
2- Hacer que tenga los siguientes atributos
.nombre: String
.apellido:String
.libros:Object []
.mascotas:String []
3-Debe tener los siguientes métodos.
.getFullName(): Retorna el nombre completo del usuario
.addMascota(): recibe un nombre de mascota y lo agrega al array de mascotas
.countMascotas():NUMBER Retorna la cantidad de mascotas que tiene el usuario
.addBook(String, String): Recibe el nombre de un libro y el nombre del autor y lo agrega a un objeto al array de libros
.getBookNames():STR Retorna un array con solo los nombres de array libros del usuario
*/

class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [] //Este argumento lo recibe mediante un método
        this.mascotas = []//Este argumento lo recibe mediante un método
    }
    getFullName(){
        console.log(`Nombre completo : ${this.nombre} ${this.apellido} `)//Muestra la anidación del nombre y apellido
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)//método push agrega al array un elemento en este caso el nombreMascota
    }
    countMascotas(){
        console.log(this.mascotas.length)//Con .lenght veo la cantidad de elementos en el array
    }
    addBook(nombreLibro, autor){ //En este método recibo 2 argumentos que agrego a un objeto y luego lo inserto a un array
        const libro = {
            nombreLibro,
            autor
        }
        this.libros.push(libro)
    }
    getBookNames(){//Acá debo mostrar solo el primer value de cada objeto en este caso Nombre
        const nombresDeLibros = [] //Este acumulará todos los nombres que fueron recogidos durante el siguiente foreach
        this.libros.forEach(element => {
            const nombres = element.nombreLibro
            nombresDeLibros.push(nombres)
        });
        console.log(nombresDeLibros)
    }
}
//Uso de datos arbitrarios para probar los métodos de la clase usuario.
const usuario1 = new Usuario('Jonathan','Alvarado')
usuario1.getFullName()
usuario1.addMascota('gato')
usuario1.addMascota('perro')
usuario1.addMascota('pez')
usuario1.addMascota('caballo')
usuario1.countMascotas()
usuario1.addBook('hechizos','Harry')
usuario1.addBook('programación en js','Jhon doe')
usuario1.addBook('Paz y amor','steve jobs')
usuario1.getBookNames()