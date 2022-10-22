// Clases abstractas
// las clases abstractas sirven para crear otras clases y asegurarnos que otras clases implementen lo que
// nosotros esperamos, NO sirven para instanciarlas

abstract class Mutante {
  constructor(
    public name:string,
    public realName:string
  ) {}
}

class XmenAbstrac extends Mutante {
  salvarMundo() {
    return 'Salvar Mundo!!'
  }
}
class BrotherHood extends Mutante {
  destruirMundoHumano() {
    return 'Conquistar a la Humanidad!!!!'
  }
}

const wolverineDos = new XmenAbstrac('Wolverine', 'James Howlett');
const magneto = new BrotherHood('Magneto', 'Erick Leshner');

console.log(wolverineDos.salvarMundo());
console.log(magneto.destruirMundoHumano());

// Las clases abstractas tambien nos sirven para "tipar" argumentos. Osea se compararan que sean
// clases exensidas de la clase abstracta

const printName = (character:Mutante) => {
  console.log(character.name);
}

// usando la funcionn
printName(wolverine);
