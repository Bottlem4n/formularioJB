"use strict"

var formulario = document.getElementById("formulario");
var entradaBoleta = formulario["boleta"],
    entradaNombre = formulario["nombre"],
    entradaGrupo = formulario["grupo"],
    entradaMateria = formulario["materia"],
    entradaFecha = formulario["fecha"];

var salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaGrupo = document.getElementById("salidaGrupo"),
    salidaMateria = document.getElementById("salidaMateria"),
    salidaFecha = document.getElementById("salidaFecha");


function mostrar(){
    var fecha = new Date(entradaFecha.value);
    
    salidaBoleta.textContent = entradaBoleta.value;
    salidaNombre.textContent = entradaNombre.value;
    salidaGrupo.textContent = entradaGrupo.value.toUpperCase();
    salidaMateria.textContent = entradaMateria.value;    
    salidaFecha.textContent = ((fecha.getDate()+1) + '/' +
    (fecha.getMonth()+1) + '/' + fecha.getFullYear());
}