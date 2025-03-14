// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear Array para almacenar nombres
let nombreAmigos = [];
//Crear funcion para almacenar los nombres en el Array nombreAmigos
function agregarAmigo()
{
//Capturamos nombre
let nombreAmigo = document.getElementById('amigo').value;
console.log('Nombre digitado:', nombreAmigo);
 if (nombreAmigo!='')
 {
 //Agregamos nombre a Array
 nombreAmigos.push(`${nombreAmigo}`);
 console.log(nombreAmigos.length);
 //Limpiar el imput y seleccionar el input
 let selectInput = document.querySelector('#amigo');
 selectInput.value='';
 console.log(selectInput);
 selectInput.select();
 actualizarLista(nombreAmigos);
 }
 else
 {
 console.log("campo vacio");
 alert("Por favor, inserte un nombre.");
 }
}
//Crear funcion para actualizar lista de amigos
function actualizarLista(nombreAmigos) 
{
//Selecciono el elemento ul o lista
var listado =document.getElementById('listaAmigos');
//Limpio la listapara que no se repitan elementos en pantalla
listado.innerHTML = "";
//Ciclo para recorrer array y mostrar elementos en lista
for (let inicio = 0; inicio < nombreAmigos.length; inicio++) 
 {
 //Comprobacion de numeros seleccionados
 console.log(inicio);
 //Creamos elemento li
 var agregarListado=document.createElement("li");
 //Creamos variable para crear texto que alamacene el nombre
 var nombre=document.createTextNode(nombreAmigos[inicio])
 //Comprobamos nombre
 console.log(nombreAmigos[inicio])
 //Agregamos el nombre a el elemneto li
 agregarListado.appendChild(nombre);
 //Agregamos el li a la lista ul
 listado.appendChild(agregarListado);
 }
}