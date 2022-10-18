type SuperCar = {
  carroceria:string; 
  modelo:string;
  antibalas:boolean;
  pasajeros:number;
  disparar?:() => void;
}

// Objetos
const batimovil:SuperCar = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
}

const bumblebee:SuperCar = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
  disparar(){
    console.log('Disparando');
  }
}

// Objetos personalizados

type metaHumano ={
  nombre:string;
  edad:(number | undefined);
  mutante:boolean;
}

const personajes:metaHumano[] = [
  {
    nombre: 'Lex Luthor',
    edad: 54,
    mutante: false,
  },
  {
    nombre: 'Erik Lehnsherr',
    edad: 49,
    mutante: true,
  },
  {
    nombre: 'James Howlet',
    edad: undefined,
    mutante: true,
  },
];

// Multoples types
type Charles = {
  poder:string;
  estatura:number;
}

type Apocalipsis = {
  lider:boolean,
  miembros:string[],
}

const charles:Charles = {
  poder: 'Psiquico',
  estatura: 1.78,
}

const apocalipsis:Apocalipsis = {
  lider: true,
  miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
}

let mystique:(Charles | Apocalipsis) = charles;
mystique = apocalipsis;