//Pokemon array wrapped in IIFE

let pokemonRepository = (function () {

   let pokemonList = [ {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
                       {name: "Ivysaur", height: 1, type: ["grass", "poison"]},
                       {name: "Venusaur", height: 2, type: ["grass", "poison"]},
                       {name: "Charmander", height: 0.6, type: ["fire"]},
                       {name: "Charmeleon", height: 1.1, type: ["fire"]},
                       {name: "Charizard", height: 1.7, type: ["fire", "flying"]},
                       {name: "Squirtile", height: 0.5, type: ["water"]},
                       {name: "Wartortle", height: 1, type: ["water"]},
   
   ]; 
   
   function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();
   
   //getAll: return all items (pokemonRepository.getAll(); should return the pokemonList array)
   
  


   //add: add a single item to the pokemonList array (calling pokemonRepository.add(item);


   
   pokemonRepository.add({name: 'Pikachu', height: 1.4, type: ["electric"]});

   console.log(pokemonRepository.getAll());


   //ForEach loop through the array 

   pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.add(pokemon); 
  });


   

   
   
   
