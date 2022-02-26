/*hacer una funcion donde entregue la cadena y retorne el nombre del piloto
CADENA--NOMBRE PILOTO
ABCF587:JUAN
KDGD400:PAOLA*/
 
/*//para imprimir el nombre del piloto
let nombre ='ABCF587: JUAN';
let arr = nombre.split(':');
console.log(arr[1]);


//para imprimir cadena y nombre
let nombre2 ='KDGD400: PAOLA';
let array = nombre2.split(':');
console.log(array)

let user ='GHFF245: DARVIS';
let [cadena, nombrepiloto] = user.split(':');
console.log(nombrepiloto);*/

//funcion flecha =>
let nombrarpiloto =(cadenaTexto) => cadenaTexto.split(':')[1]
console.log(nombrarpiloto('GHFF245: DARVIS'))
