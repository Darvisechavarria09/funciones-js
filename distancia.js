//funcion tradicional para calcular la distancia entre 2 puntos

/*function calcularDistancia(x1,y1,x2,y2){
    //raiz cuadrada
    return(Math.sqrt(Math.pow((x2-x1),2)+ Math.pow((y2-y1),2)))
}*/

//llamado a la funcion
let calcularDistancia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2-x1),2)+ Math.pow((y2-y1),2))

console.log(`la distancia calculada es: `, (calcularDistancia(0,0,70,-50)).toFixed(2))