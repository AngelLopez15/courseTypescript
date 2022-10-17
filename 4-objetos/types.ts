// Tipos personalizados
// Supongamos que en un futuro alguno de los tipos de los compos debe de cambiar, entonces lo que tendriamos que hacer
// es ir y cambiar el tipo de esa propiedad en todos los objetos donde este implementado.
// Eso no es muy optimo para evitar eso vemos ha hacer uso del "type" de Typescript que sirve para crear un nuevo
// tipo de dato

// let flash:{ name:string, age:number, powers:string[], getName?:() => string } = {
//   name: 'Barry Allen',
//   age: 24,
//   powers: ['Súper velocidad', 'Viajar en el tiempo'],
// }

// let superman:{ name:string, age:number, powers:string[], getName?:() => string } = {
//   name: 'Clark Kent',
//   age: 30,
//   powers: ['Súper velocidad'],
// }

// Creado nuestro typo personalizado
// el "type" no tiene equivalente en javascript, solo vive en Typescript y sirve para poner reglas(restricciones)
// a nuestros objetos que estamos creando al momento de desarrollar. Al transpilarla a javacript desaparecen los "types"
// Ahora si en algun momento alguna propiedad debe cambiar su tipo basta con solo cambiarla en el Type personalizado que hemos
// creado y automaticamente cambiara en todos los lugares donde este implementado, (Obviamente se tendra que corregir el valor)
// Pero ya no el tipado en cada declaracion
type Hero = {
  name:string;
  age:number;
  powers:string[];
  getName?:() => string;
}

// Una vez definido nuestro type podemos implementarla en nuestros objetos y de esta manera tambien nos evitamos
// poner el tipado en linea tan largo y repetitivo

let flash:Hero = {
  name: 'Barry Allen',
  age: 24,
  powers: ['Súper velocidad', 'Viajar en el tiempo'],
}

let superman:Hero = {
  name: 'Clark Kent',
  age: 30,
  powers: ['Súper velocidad'],
  getName() {
    return this.name;
  },
}