type TypeHero = {
  name:string;
  age:number;
  powers:string[];
  getName?:() => string;
}

// podemos hacer que una variable tenga muchos tipos
let myCustomVariable:(string | number | TypeHero) = 'Angel';

myCustomVariable = 20;

myCustomVariable = {
  name: 'Angel',
  age: 30,
  powers: ['volar']
}