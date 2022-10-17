// el tipo de dato Never
// NOTA: el never no es undefined, no es null, no es void, el nerver es never es otro tipo de datos
// El never significa que la funcion no debe de terminar exitosamente
// Osea cuando una funcion que retorne never sea llamada es por que ahi se va a detener el codigo
// ya no va a seguir avanzando

const error = (mensaje:string):never => {
  throw new Error(mensaje);
}

// Si necesitamos que la funcion si pueda retornar algo podemos hacerlo con un OR
const errorONumero = (mensaje:string, condicion:boolean):(never | number) => {
  if (condicion) {
    throw new Error(mensaje);
  }
  return 1;
}

// Aqui se va a detener el codigo
error('Auxilio!!!!!');
// Este consolo log ya no se ejecutaria
console.log('Hola mundo');