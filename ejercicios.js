'use strict';
/* Preguntar nombre al usuario y saludarlo por su nombre. */

/*
const nombre = prompt('Por favor ingrese su nombre:');
alert('Hola, ' + nombre);
console.log(nombre)

// Preguntar nombre al usuario y saludarlo por su nombre.
function saludarUsuario(nombre) {
    document.write(`Hola, ${nombre}`);
  }

  //saludarUsuario(prompt('Por favor ingrese su nombre:'));
  
  /* Preguntar nombre al usuario y saludarlo por su nombre.
  Si el usuario no escribe su nombre saludar: "Hola, desconocido."
  */
  /*
  const nombre = prompt('Por favor ingrese su nombre:');
  if (nombre) {
    document.write('hola, ' + nombre);
  } else {
    document.write('hola, desconocido.');
  }
  */
  // 1 . Leer nombre y apellido, saludar por nombre y apellido.
/*
function saludar() {
    let nombre = prompt("Ingrese su nombre");
    let apellido =prompt("Ingrese su apellido");

    if (nombre && apellido) {
        document.write(`Hola ${nombre} ${apellido}`);
    } 
    else{ 
        document.write("Hola desconocido")
    }

}
saludar();
*/

 // 2. Pregunte al usuario si desea continuar, responder con hola o adiós.
/*
 function continuar() {
    var pregunta = confirm("Deseas continuar?");
    if (pregunta == true){
        document.write("HOLA, BIEN O NO!!");
        return true;
    } else {
        document.write("ADIOS PUES!!");
        return false
    }
    
 }
 continuar()

*/
  // 3. Leer nombre y edad, Mostrar si es o no mayor de edad.

/*
function validarEdad() {
    let nombre = prompt("Ingrese su nombre");
   var nacimiento = prompt("Ingrese su año de nacimiento");
   var calculo = 2023-nacimiento;
   var edad=18;
   if(calculo>=edad )                                               //*operador logico - && nacimiento!="" - 
   {
    alert(nombre + " " + "usted es mayor de edad");
} else{
alert(nombre + " " + "!Usted es menor de edad!");
}
}
validarEdad()
*/ 
  /* 4. Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.


function perfil() {

    let tipoUsuario = prompt("Tipo de Usuario, Administrador, Ventas ó Cliente");
var usuario = "administrador"

switch (perfil) {
    case "administrador":
        document.write("loging administrador")
        break;
    case "ventas":
        document.write("loging ventas")
        break;

    default "cliente":
        document.write("loging cliente")
        break;
    
} if( )

 }
*/





  // 5. Leer un número, mostrar el doble de n.
/*
function duplicar() {
    let numero = prompt("Ingrese un numero");
    var suma = numero*2;
        document.write(suma);
}
duplicar()

*/



  // 6. Leer un número, mostrar la mitad de n.
/*
  function dividir() {
    let numero = prompt("Ingrese un numero");
    var dividir = numero/2;
        document.write(dividir);
}
dividir()
*/

// 7. Leer un número, mostrar si es positivo, negativo o cero.




  // 8. Leer un número, mostrar si es par o impar.
/*
  function esPar() 
{ let numero = prompt("Ingrese un numero");
  var esPar =(numero)= > return numero%2===0;
  
} 

*/
  // 9. Leer dos números, mostrar el mayor.
/*
  function comparacion() {
    let numero1 = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese un numero");
    if (numero1>numero2){
        document.write(numero1);
    } else {
        (numero1<numero2)
        document.write(numero2);
    }

  }
  comparacion()
*/
  // 10. Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

  function aritmeticas() {
    let numero1 = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese un numero");
    var suma = numero1+numero2;       
    var dividir = numero1/numero2;     
    var Multiplicación = numero1*numero2;
var porc
    document.write("Suma:"+" "+suma+" "+"division:"+" "+dividir+" "+"multiplicacion:"+" "+Multiplicación);
    }
    aritmeticas()


  // 11. Leer dos números, mostrar la suma dividido en la resta.