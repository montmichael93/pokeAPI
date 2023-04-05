//safari
const pokemonName = fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

Promise
.all([pokemonName])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
        let [poke] = data
        let [...list] = poke.results
        list =  list.map((list) => list.name);   
        let randomPokemon = (Math.floor(Math.random() * list.length))
        let selectedPokemon = list[randomPokemon]
        const outputPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        Promise
        .all([outputPokemon])
        .then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
        //pokemon 
        const [poke] = data;
        //pokemon name
        const pokeName = poke.name;
        //pokemon type
        let [...pokeTypes] = poke.types;
        pokeTypes = pokeTypes.map((pokeTypes) => pokeTypes.type.name) //.toString().replace(',', ', ')
        //pokemon abilitites
        let [...pokeAbilities] = poke.abilities;
        pokeAbilities = pokeAbilities.map((pokeAbilities) => pokeAbilities.ability.name) //.toString()
        //items   
        let [...pokeItem] = poke.held_items;
        pokeItem =  pokeItem.map((pokeItem) => pokeItem.item.name) //.toString().replace(',', ', ')
        //gengar attacks
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
                this.item = item;
                this.type = type;   
            }   
        }
 const encountered = new Pokemon(pokeName, pokeAttcks, pokeAbilities, pokeTypes, pokeItem);
        console.table(encountered)      
    }).catch((error) => console.log(error))
}).catch((error) => console.log(error));
  