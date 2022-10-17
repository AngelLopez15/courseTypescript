"use strict";
const message = 'Hola TypeScript';
const thisIsAHero = {
    name: 'Captain America',
    age: 35,
};
thisIsAHero.age = 30;
// tsc --watch -> comando para ejecutar el modo observador y compilar automaticamente
console.log('This is the message: ', message);
console.log('This is the age of my hero: ', thisIsAHero.age + 1);
