//Funcion constructora Persona:
function Persona(nombre, edad, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.obtDetalles = function(){
                                var ficha = document.createElement('div');
                                var datos = document.createElement('p');
                                datos.innerHTML +=
                                      "Nombre: " +this.nombre+
                                      "<br>Edad: " +this.edad+
                                      "<br>Genero: "+this.genero;

                                ficha.appendChild(datos); //insertando el <p> en el div
                                return ficha;
                               };

}

//Funcion que hereda de Persona:
function Estudiante(persona, curso, grupo){
  this.persona = persona;
  this.curso = curso;
  this.grupo = grupo;
  this.registrar = function(){
                                var ficha = document.createElement('div');
                                var datos = document.createElement('p');
                                datos.innerHTML +=
                                      "<p>Nombre: " +this.persona.nombre+
                                      "<br>Edad: " +this.persona.edad+
                                      "<br>Genero: " +this.persona.genero+
                                      "<br>Curso: " +this.curso+
                                      "<br>Grupo: " +this.grupo+ "</p>"

                                ficha.appendChild(datos);
                                return ficha;
                             };

}

//Funcion que hereda de Persona:
function Profesor(persona, asignatura, nivel){
  this.persona = persona;
  this.asignatura = asignatura;
  this.nivel = nivel;
  this.asignar = function(){
                             var ficha = document.createElement('div');
                             var datos = document.createElement('p');
                             datos.innerHTML +=
                                  "Nombre: " +this.persona.nombre+
                                  "<br>Edad: " +this.persona.edad+
                                  "<br>Genero: " +this.persona.genero+
                                  "<br>Asignatura: " +this.asignatura+
                                  "<br>Nivel: " +this.nivel;

                             ficha.appendChild(datos);
                             return ficha;
                             };
}

//Creando instancias
var persona1 = new Persona("Wendy", 25, "femenino");
var estudiante1 = new Estudiante(persona1, "Front End", "D");
var profesor1 = new Profesor(persona1, "Javascript", "Intermedio");

//Agregando fichas al contenedor:
var contenedor = document.getElementById("contenedor");
contenedor.appendChild(persona1.obtDetalles());
contenedor.appendChild(estudiante1.registrar());
contenedor.appendChild(profesor1.asignar());
