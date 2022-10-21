class Avenger {
  constructor(
    public name:string,
    public realName:string,
  ) {
    console.log('Constructor Avenger invocado!');
  }

  // Con protected podemos acceder al metodo desde otras clases que extiendan de esta
  // Con privada solo podemos acceder al metodo dentro de la misma clase donde se ha creado
  protected getFullName() {
    return `${this.name} is ${this.realName}`
  }
}

class Xmen extends Avenger {
  constructor(
    name:string,
    realName:string,
    public isMutant:boolean,
  ) {
    super(name, realName);
    console.log('Constructor Xmen invocado!');
  }

  // los getters son metodos para acceder a informarcion, siempre regresan algo
  // No reciben parametros
  public get fullName():string {
    return `${ this.realName } is ${ this.name }` 
  }

  // Los setter son metodos para modificar, crear, o escribir informacion
  // siempre reciben parametro y no retornan nada
  // Se pueden llamar igual que los getter por que son diferentes cosas
  public set fullName(name:string) {
    this.name = name;
  }
  

  getFullNameDesdeXmen() {
    // llamando el metodo getFullName desde la clase Avenger
    console.log(super.getFullName());
  }
}

const wolverine = new Xmen('Wolverine', 'James Howlett', true);
// usando el getter
console.log(wolverine.fullName);

// usando el setter
wolverine.fullName = 'Logan';
// usando el getter otra vez
console.log(wolverine.fullName);