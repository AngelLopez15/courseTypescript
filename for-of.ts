type TypeAvenger = {
  name:string;
  weapon:string;
}

const ironMan:TypeAvenger = {
  name: 'Iron Man',
  weapon: 'Armor Suit',
}

const captainAmerica:TypeAvenger = {
  name: 'Captain America',
  weapon: 'Shield',
}

const thor:TypeAvenger = {
  name: 'Thor',
  weapon: 'Hammer',
}

const theAvengers:TypeAvenger[] = [ironMan, captainAmerica, thor];

// usando el for of
for (const avenger of theAvengers) {
  console.log(avenger);
  console.log(avenger.name, avenger.weapon);
}
