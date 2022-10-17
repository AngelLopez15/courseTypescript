// hay tres formas de definir strings en typescript

// con comillas simples
const spiderman:string = 'spiderman';

// comillas dobles
const wolverine:string = 'wolverine';

// Con backticks
const captainAmerica:string = `captain america`;

// poner el tipo de dato ayuda a que el autocompletado nos ponga automaticamente 
// los metodos que se pueden usar en los tipo string
console.log( spiderman.toUpperCase() );

// ocupando el operador de corto circuito
console.log( wolverine[10]?.toUpperCase() || 'No existe');