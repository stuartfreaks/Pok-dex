let pokemonList = [ {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
                    {name: "Ivysaur", height: 1, type: ["grass", "poison"]},
                    {name: "Venusaur", height: 2, type: ["grass", "poison"]},
                    {name: "Charmander", height: 0.6, type: ["fire"]},
                    {name: "Charmeleon", height: 1.1, type: ["fire"]},
                    {name: "Charizard", height: 1.7, type: ["fire", "flying"]},
                    {name: "Squirtile", height: 0.5, type: ["water"]},
                    {name: "Wartortle", height: 1, type: ["water"]},

]; 



// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one

pokemonList.forEach(function(name) {
    console.log(name);
});


