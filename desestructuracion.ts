// para menejar objeto siempre es mejor hacer un type
type Avenger = {
  captain:string;
  ironman:string;
  thor:string;
  hulk:string;
  activo:boolean;
  poder:number;
}

const avengers:Avenger = {
  captain: 'Steve Rogers',
  ironman: 'Tony Stark',
  thor: 'Thor Odinson',
  hulk: 'Bruce Banner',
  activo: true,
  poder: 1000.5894,
}

// Esta es una desestructuracion
const {
  captain,
  ironman,
  poder,
} = avengers;
// Al desestructurarlo podemos usarlas y aplicarles metodos
console.log(poder.toFixed(2), captain.toUpperCase());

// desestructurando en una funcion
// Le estamos indicando que la funcion va a recibir parametros del typo Avenger, osea un objeto
const printAvenger = ({ captain, ...resto }:Avenger) => {
  console.log(captain, resto);
}


// desestructuracion de Arreglos
// vamos a desestructurar una tupla
const avengersArray:[string, boolean, number] = ['captain america', true, 500];

// En la desestructuracion de un arreglo no importa el nombre que le asignemos
// importa la posicion en la que esta, por ejemplo la siguiente solo desestructura la segunda posicion
// const [ , active, ] = avengersArray;
const [cap, active, power] = avengersArray;