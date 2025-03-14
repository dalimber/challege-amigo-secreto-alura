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
 actualizarLista();
 }
 else
 {
 console.log("campo vacio");
 alert("Por favor, inserte un nombre.");
 }
}
//Crear funcion para actualizar lista de amigos
function actualizarLista() 
{
let idElemento='listaAmigos';
limpiarListas(idElemento);
//Selecciono el elemento ul o lista
//var listado =document.getElementById('listaAmigos');
//Limpio la listapara que no se repitan elementos en pantalla
//listado.innerHTML = "";
//Ciclo para recorrer array y mostrar elementos en lista
for (let posicion = 0; posicion < nombreAmigos.length; posicion++) 
 {
 mostrarElementos(idElemento,nombreAmigos,posicion);
 //Comprobacion de numeros seleccionados
 //console.log(inicio);
 //Creamos elemento li
 //var agregarListado=document.createElement("li");
 //Creamos variable para crear texto que alamacene el nombre
 //var nombre=document.createTextNode(nombreAmigos[inicio]);
 //Comprobamos nombre
 //console.log(nombreAmigos[inicio]);
 //Agregamos el nombre a el elemneto li
 //agregarListado.appendChild(nombre);
 //Agregamos el li a la lista ul
 //listado.appendChild(agregarListado);

 }
}
//Crear la funcion para selecionar aleatoriamente un nombre del array
function sortearAmigo() 
{
//Creamos el selecionador aleatorio mediante un numero
let eleccion = Math.floor(Math.random()*nombreAmigos.length);  
//Verificamos numero y nombre selecionado
console.log(`Numero:${eleccion}, Nombre: ${nombreAmigos[eleccion]}`);
//Mostramos el nombre selecionado en pantalla
let idElemento = 'resultado';
limpiarListas(idElemento);
mostrarElementos(idElemento,nombreAmigos,eleccion);
}
//Funcion para crear elementos li
function mostrarElementos(elementId,lista,posicion) 
{
    //Seleccionamos el espacio para la lista o ul
    var espacioLista = document.getElementById(`${elementId}`);
    //Creamos elemento li
    var agregarLi = document.createElement('li');
    //Creamos el almacenamiento del texto
    var crearTexto = document.createTextNode(lista[posicion]);
    //Agregamos el texto al elemento li
    agregarLi.appendChild(crearTexto);
    //Agregamos el elemento li a elemento ul
    espacioLista.appendChild(agregarLi);

}
//Funcion para limpiar los elementosul de listas
function limpiarListas(elementId) 
{
    //Seleccionamos el espacio para la lista o ul
    var espacioLista = document.getElementById(`${elementId}`);
    espacioLista.innerHTML = "";
}