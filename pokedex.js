//pokedex

var rs = require('readline-sync');

function getOperation() {
    while (true) {
        let operator = rs.question('chose your pokemon ');
       return operator
    }
} 
let chosenPokemon = getOperation(operator)
const Pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`);

Promise
.all([Pokemon])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
        const [poke] = data;
        const pokeName = poke.name;
        let [...pokeTypes] = poke.types;
        pokeTypes = pokeTypes.map((pokeTypes) => pokeTypes.type.name);
        let [...pokeAbilities] = poke.abilities;
        pokeAbilities = pokeAbilities.map((pokeAbilities) => pokeAbilities.ability.name);
        let [...pokeItem] = poke.held_items;
        pokeItem =  pokeItem.map((pokeItem) => pokeItem.item.name);
        let pokeAttcks = [];
        let randomAttck = [];
        let [...attack] = poke.moves;
  attack = attack.map((attack) => attack.move.name);
  while (randomAttck.length < 4) {
    randomAttck.push(Math.floor(Math.random() * attack.length))
    pokeAttcks [0] = attack[randomAttck[0]]
    pokeAttcks [1] = attack[randomAttck[1]]
    pokeAttcks [2] = attack[randomAttck[2]]
    pokeAttcks [3] = attack[randomAttck[3]]
}  

class Pokemon {
        constructor(name, attacks, abilities, type, item) {
            this.name = name;
            this.attacks = attacks;
            this.abilities =  abilities;
            this.item = item.length > 1 ? item : 'N/A';
            this.type = type;    
        } 
    }
    const selectedPokemon = new Pokemon(pokeName, pokeAttcks, pokeAbilities, pokeTypes, pokeItem);
    console.dir(selectedPokemon)
}).catch((error) => console.log(error));

