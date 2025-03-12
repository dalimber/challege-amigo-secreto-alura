// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear Array para almacenar nombres
let nombreAmigos = [];
//Crear funcion para almacenar los nombres en el Array nombreAmigos
function agregarAmigo()
{
//Capturamos nombre
let nombreAmigo = document.getElementById('amigo').value;
console.log('Nombre digitado:', nombreAmigo);
//Agregamos nombre a Array
nombreAmigos.push(`${nombreAmigo}`);
console.log(nombreAmigos.length);


}