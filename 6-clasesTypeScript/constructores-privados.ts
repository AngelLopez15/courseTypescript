// Contructores privados de una clase
// No muy usado pero sirve para controlar la manera en la que las instancias son ejecutadas
// usado con el patron de diseño "singleton" es decir una unica instancia para toda la aplicacion
// Siempre va a regresar la misma instancia creada

class Apocalipsis {
  // creamos un instancia de del mismo tipo de la clase dentro de la clase
  static instance:Apocalipsis;

  private constructor(public name:string) {}

  // Este metodo va a crear una instancia de Apocalisis (de la misma clase)
  static callApocalipsis():Apocalipsis {
    if (!Apocalipsis.instance) {
      // Aqui si podemos llamar el contructor por que estamos dentro de la clase
      Apocalipsis.instance = new Apocalipsis('En Sabah Nur');
    }
    return Apocalipsis.instance;
  }

  changeName(newName:string):void {
    this.name = newName;
  }
}

const apocalipsisOne = Apocalipsis.callApocalipsis();

// Como es la misma instancia para las que se creen. Si se cambia el valor de una propiedad en una
// se va a cambiar en todas
apocalipsisOne.changeName('Charles Xavier');