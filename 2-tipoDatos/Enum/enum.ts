// Este tipo de dato solo existe en typescript
// Los enums (enumeraciones)
// El objetivo de una enumeracion es poder crear por ejemplo rangos
// crear valores faciles de ver y leer en codigo

// Aunque le podemos asignar el valor directamente despues de declararlo
// lo mejor es usar los valores que ya le hemos declarado nosotros
// Si tenemos definido un valor minimo pero no los siguites se asigara un +1
// apartir del valor de min declarado

// para declarar un enum se usa la palabra reservada "enum" seguido del nombre de la variable y de llaves
// Como si fuera una especie de objeto
// Si medium no estuviera adignado, por default su valor seria un 2
enum AudioLevel {
  min = 1,
  medium = 5, 
  max = 10,
}

let currentAudio:AudioLevel = AudioLevel.max;

console.log(currentAudio);
