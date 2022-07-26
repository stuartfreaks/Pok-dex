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
   
   return {
       add: function(pokemon){
           pokemonList.push(pokemon);
       },
       getAll: function() {
         return pokemonList;
    }   
   
    };
   })();
   
   //getAll: return all items (pokemonRepository.getAll(); should return the pokemonList array)
   
   console.log(pokemonRepository.getAll()); //[]

   //add: add a single item to the pokemonList array (calling pokemonRepository.add(item);
   
   pokemonRepository.add({name: 'Pikachu'});

   console.log(pokemonRepository.getAll());


   

   
   
   