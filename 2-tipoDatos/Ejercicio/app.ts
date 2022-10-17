(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor', 5, true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Power {
      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100,
    }

    const fuerzaFlash = Power.flash;
    const fuerzaSuperman = Power.superman;
    const fuerzaBatman = Power.batman;
    const fuerzaAcuaman = Power.superman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
      return
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    // para tener acceso al length debomos castearlo a atring
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
})()