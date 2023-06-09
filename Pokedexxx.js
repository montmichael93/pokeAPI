//updated pokedex

var rs = require('readline-sync');
const readline = require('readline');
const { rejects } = require('assert');

const allPokemonList = fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
let chosenPokemon;


Promise
.all([allPokemonList])
.then((response) => {

    return Promise.all(response.map((res) => res.json()));
    
}).then((data) => {
        let [poke] = data;
        let [...list] = poke.results;
        list =  list.map((list) => list.name);


        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      function userInput() {
        return new Promise((resolve, reject) => {
          rl.question("Enter a pokemon ", input => {  
            
        if (!list.includes(input)) {
            reject('enter a real pokemon')
        } else {
            resolve(input)
        }

      });
      }).then(input => {

        chosenPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      }
    Promise
    .all([chosenPokemon])
    .then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {

        const [poke] = data;
        const pokeName = poke.name;
        let [...pokeTypes] = poke.types;        
        pokeTypes = pokeTypes.map((pokeTypes) => pokeTypes.type.name) //.toString().replace(',', ', ')
        let [...pokeAbilities] = poke.abilities;
        pokeAbilities = pokeAbilities.map((pokeAbilities) => pokeAbilities.ability.name) //.toString();
        let [...pokeItem] = poke.held_items;
        pokeItem =  pokeItem.map((pokeItem) => pokeItem.item.name) //.toString().replace(',', ', ')
        let pokeAttcks = [];
        let randomAttck = []
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
        console.table(selectedPokemon)
    }).catch((error) => console.log(error))
}).catch((error) => console.log(error));



async function userLog() {
 await userInput();
  if(selectedPokemon) {
    const answer = rs.keyInYN("Pick another?")
    if (answer) {
        userLog();
    }  else {
        rl.close();
        return;
    }
} 
   return userLog();
}
userLog().then(result => console.log(result));