// Clases en Typescript
class Avenger {
  // Esta es la forma tradicion de declarar un contructor como en todos los lenguajes
  // public name:string;
  // public team:string;
  // las propiedades provadas solo se pueden acceder por el contructor, los setter y getter de la propia clase
  // private realName:(string | undefined);
  // las propiedades estaticas si son accesibles desde afuera
  // static active:boolean = true;

  // constructor(name:string, team:string, realName?:(string | undefined)) {
  //   this.name = name;
  //   this.team = team;
  //   this.realName = realName;
  // }

  // Esta es la forma corta de declarar el contructor que nos proporciona Typescript
  // se declaran el nivel de acceso y el tipo directo en el constructor
  // los metodos y propiedades estaticas solo pudens er accesidas a traves del nombre de la clase
  // ejecomplo Avenger.active o Avenger.getActiveAvenger()
  static active:boolean = true;
  static getActiveAvenger() {
    return this.active;
  }

  constructor(
    public name:string,
    public team:string,
    private realName:string
  ) {}

  // Metodos publicos y privados
  public bio():string {
    return `${ this.name } ${ this.team }`
  }

  private bioPrivate():string {
    return `${ this.name } is ${ this.realName }`
  }
}

const antman:Avenger = new Avenger('Ant Man', 'Team Cap', 'Scott Lang');

console.log('Active:', Avenger.active);