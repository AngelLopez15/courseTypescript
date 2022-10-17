function sumar(a:number, b:number):number {
  return a + b;
}

const contar = (heroes:string[]):number => {
  return heroes.length;
}

const superHeroes:string[] = ['Wolverine', 'Ciclops', 'Storm', 'Jean Gray', 'Beast'];

contar(superHeroes);

const llamarBatman = (llamar:boolean = true):void => {
  if (llamar) {
    console.log('Batiseñal activada!');
  }
}

const unirHeroes = (...personas:string[]):string => {
  return personas.join(', ');
}

const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:string[]) => {}

let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;

noHaceNadaTampoco = noHaceNada;