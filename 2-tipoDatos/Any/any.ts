// Debemos usar lo menos posible (nunca si es posible)
// aunque a veces puede que no quede de otra

// declaramos una variable y no le declaramos ningun valor entonces por defecto es de tipo any
let avenger:any = 123;
let exist;
let power;

avenger = 'Hulk';

console.log(avenger.charAt(0));

// En typescrip tenemos algo que se llama casting: y es la propiedad de poder decirle al typescript que
// trate un dato como si fuera otro. Debemos usar la palabra "as" seguido del tipo de dato que queremos que
// sea tratado. NOTA: No cambia el tipo de valor
console.log((avenger as string).charAt(0));
// Otra forma de hacer el cast es con <tipo de dato>
console.log((<string>avenger).charAt(2));

avenger = 151.55884;

console.log(avenger.toFixed(2));

console.log(exist);
console.log(power);