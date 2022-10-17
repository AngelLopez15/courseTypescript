// Objeto literal normal de javascript, si pasamos el cursor por encima podemos ver como TS 
// trata de inferiri el tipo de dato, a simple vista podemos ver que es identico a un objeto
// de javascript pero si intentamos agregar una nueva propiedad, TS no nos dejara por que, internamente
// "crea" un nuevo tipo de dato de un objeto con SOLO esas 3 propiedades
// let flash = {
//   name: 'Barry Allen',
//   age: 24,
//   powers: ['Súper velocidad', 'Viajar en el tiempo'],
// }

// El mismo objeto pero tipandolo

let superHero:{
  name:string, 
  age:number, 
  powers:string[],
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo'],
  }

// A difrencia de las funciones en los objetos no importa la posicion de las propiedades
// usalmente se ponene en orden alfabetico o segun se vayan creando
superHero = {
  name: 'Clark Kent',
  age: 30,
  powers: ['super fuerza', 'volar', 'vision de rayos x']
}

// Si necesitamos poner propiedades opcionales al objeto debemos usar el operador ?
let superHero2:{
  name:string, 
  age:number, 
  powers:string[],
  getName?:() => string, //le estamos indicando que el objeto puede tener una propiedad de tipo funcion que no recibe parametro y retorna un string
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo'],
  }

superHero2 = {
  name: 'Clark Kent',
  age: 30,
  powers: ['super fuerza', 'volar', 'vision de rayos x'],
  getName() {
    return this.name;
  },
}