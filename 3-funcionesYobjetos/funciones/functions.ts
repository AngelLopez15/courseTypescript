const hero:string = 'Batman';

function returnName():string {
  // SOLO para este ejemplo estamos tomando el valor de retorno desde afuera de la funcion
  // No se hace asi nunca
  return hero;
}

const heroName = returnName();

const activateBatuSignal = ():string => {
  return 'Batiseñal Activada!!!!!'
}

// FUNCIONES CON PARAMETROS REQUERIDOS
const fullName = (firstName:string, lastName:string):string => {
  return `${ firstName } ${ lastName }`
}

const nombre = fullName('Steve', 'Rogers');

// FUNCIONES CON PARAMETROS OPCIONALES
// para indicarle a una funcion que un parametro es opcional (que no es necesario que la reciba para poderla usar)
// se le indica con el signo "?" despues del parametro y antes del tipo de dato
const fullNameOptional = (firstName:string, lastName?:string):string => {
  // Como le estamos indicando el segundo parametro es opcional hay que validar con un or || el valor default
  // en caso de que no venga el parametro de lo contrario el valor donde se use ese parametro sera undefined
  return `${ firstName } ${ lastName || '---'}`
}

const nombre2 = fullNameOptional('Steve');

// FUNCIONES CON PARAMETROS POR DEFAULT
// En este caso por ejemplo los ponemos el valor por default del booleano nos va a marcar un error
// por que un parametro obligatorio no puede ir despues de uno opcional, los opcionales tendrian que ir al ultimo
// para arreglar ese error en caso de querer reacomodar los argumentos entonces ponemos el valor po default
const fullNameDefault = (firstName:string, lastName?:string, upper:boolean = false):string => {
  if (upper) {
    return `${ firstName } ${ lastName || '---'}`.toLocaleUpperCase();
  } else {
    return `${ firstName } ${ lastName || '---'}`
  }
}

const nombre3 = fullNameDefault('Steve', 'Rogers', true);

// Funciones con argumentos REST(Resto de argumento/siguientes argumentos)
// para poner los argumentos tantos como sean necesarios vamos hacer uso del spreed operator (...)
// que pondra los demas argumentos dentro de array

const nameLong = (firstName:string, ...restArgs:string[]):string => {
  // Como el rest es un arreglo necesitamos separar los argumentos con un join
  return `${ firstName } ${ restArgs.join(' ') }`
}

const myName = nameLong('Juan', 'Pedro', 'De', 'La Mar');

// variables tipo Funcion
const addNumbers = (a:number, b:number) => a + b;
const greet = (name:string) => `Hola ${name}!!!!!`;
const saveTheWorld = () => 'El Mundo está a salvo';

// declarando una variable de tipo funcion
// let myFunction:Function;

// si queremos ser mas especificos y decirle que va a retornar la funcion
// entonces hay que tiparla con una funcion flecha
let myFunction:(a:number, b:number) => number;

// y asignandole las funciones
myFunction = addNumbers
console.log(myFunction(1,2));

// myFunction = greet
// console.log(myFunction('Angel'));

// myFunction = saveTheWorld
// console.log(myFunction());