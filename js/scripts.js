let pokemonList = [ {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
                    {name: "Ivysaur", height: 1, type: ["grass", "poison"]},
                    {name: "Venusaur", height: 2, type: ["grass", "poison"]},
                    {name: "Charmander", height: 0.6, type: ["fire"]},
                    {name: "Charmeleon", height: 1.1, type: ["fire"]},
                    {name: "Charizard", height: 1.7, type: ["fire", "flying"]},
                    {name: "Squirtile", height: 0.5, type: ["water"]},
                    {name: "Wartortle", height: 1, type: ["water"]},

]; 



// Create a for loop that loops over pokemonList 

for (let i=0; i<pokemonList.length; i++) {
    
// outputs name and height to the DOM plus writes message for pokemons with a height over 0.6 and adds message (but only to Venusaur)

    if (pokemonList[i].height>1.7) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow! that\'s big!')
    } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
    }
}
