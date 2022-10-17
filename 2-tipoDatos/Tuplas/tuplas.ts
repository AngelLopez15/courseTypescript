// Las tuplas son propias de Typescript (trios, cuartetos, ...)
// Serian parecidas a una matriz
// Una tupla se define de la siguiente manera
// para tiparlo debemos de hacerlo declarando que tipo de dato estara
// en cada una de la posicion especifica de la tupla

const hero:[string, number] = ['Dr. Strange', 100];

const vilian:[string, number, boolean] = ['Dormamu', 100, true];

// En la posicion cero debe ir un string
hero[0] = 'Spider man';
// En la posicion uno debe ir un numero
hero[1] = 80;