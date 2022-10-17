// para tipar un arreglo debemos de ocupar los corchetes []
// generalmente esto hace referencia a arreglos (no siempre)
// y debemos especificicar antes de los [] el tipo de dato que contendra el arreglo
const numbers:number[] = [1,2,3,4,5,6,7,8,9];

// si necesitamos que el arreglo pueda contener mas de un tipo se declara de la siguiente manera
const numbers2:(number | string)[] = [15,20, 'hola', 50];
numbers2.push('adios');

const palabras:string[]= ['buenos dias', 'buenas tardes', 'buenas noches'];

// foreach solo es para strings
palabras.forEach( palabra => console.log( palabra.toLocaleUpperCase() ));