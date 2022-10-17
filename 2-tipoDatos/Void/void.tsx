// El tipo de dato Void lo vamos usar para indicar explicitamente 
// que una funcion no va a retornar nada
// En javascript una funcion que no tenga un return explicito va a regresar undefined
// para evitar el undefined es que debemos poner implicitamente void

// Declarando un return void en un funcion tradicional
// Al poner void typescrip ya no nos dejara regresar nada en el return
function callBatman():void {
  return;
}

// Declarar vpid en una funcion flecha
const callSuperman = ():void => {
  return;
}

// NOTA: Null no es lo mismo que undefined