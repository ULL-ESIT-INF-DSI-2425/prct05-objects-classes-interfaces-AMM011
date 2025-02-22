import { Pokemon } from "./pokemon";

export class Pokedex {
    // Creamos un atributo que contendra la lista de pokemons, como la pokedex
    private pokedex: Pokemon[];

    // Constructor para crear una pokedex
    /**
     * 
     * @param pokedex - Lista de pokemons
     */
    constructor(pokedex: Pokemon[]) {
        this.pokedex = pokedex;
    }

    /**
     * 
     * Sirve para agregar un pokemon a la pokedex
     * 
     * @param pokemon - Pokemon a agregar
     */
    agregarPokemon(pokemon: Pokemon): void {
        if (!this.pokedex.some((p) => p.getName === pokemon.getName)) {
            this.pokedex.push(pokemon);
        } else {
            console.log(`El Pokémon ${pokemon.getName} ya está en la Pokédex.`);
        }
    }

    /**
     * 
     * Sirve para mostrar todos los pokemons de la pokedex
     * 
     * @returns - Lista con los nombres de los pokemons
     */
    mostrarTodos(): string[] {
        // Creamos una lista donde vamos a ir almacenando todos los pokemons
        let namePokemons: string[] = [];

        // Recorremos todos los pokemons de la pokedex
        this.pokedex.forEach((pokemon) => {
            namePokemons.push(pokemon.getName);
        });

        // Retornamos los nombres de los pokemons
        return namePokemons;

        // Manera mas optima de devolver el nombre de los pokemons
        // return this.pokedex.map(pokemon => pokemon.getName);
    }

    /**
     * 
     * Nos permite buscar un pokemon por el nombre, dentro de la pokedex
     * 
     * @param namePokemon - Nombre del pokemon a buscar
     * @returns - Pokemon que se busco por el nombre
     */
    buscarPorNombre(namePokemon: string): Pokemon | undefined {
        // Creamos una variable donde vamos almacenar al pokemon que se busco por el nombre
        let foundPokemon: Pokemon | undefined;

        // Recorremos toda la pokedex
        this.pokedex.forEach((pokemon) => {
            if (pokemon.getName === namePokemon) foundPokemon = pokemon;
        });

        // Retornamos el pokemon que se solicito por el nombre        
        return foundPokemon;

        // Manera mas eficiente con find para buscar el pokemon por el nombre
        // return this.pokedex.find(pokemon => pokemon.getName === namePokemon);
    }

    /**
     * 
     * Nos permite buscar pokemons por el tipo
     * 
     * @param type - Tipo de pokemon a buscar
     * @returns - Lista de pokemons que son del tipo solicitado
     */
    buscarPorTipo(type: string): Pokemon[] {
        return this.pokedex.filter(pokemon => pokemon.getType === type);
    }
}

// Ejemplo de uso:
// const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", { attack: 55, defense: 40, speed: 90, hp: 35 });
// const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", { attack: 52, defense: 43, speed: 65, hp: 39 });

// const myPokedex = new Pokedex([pikachu]);
// myPokedex.agregarPokemon(charmander);
// console.log(myPokedex.mostrarTodos()); // ["Pikachu", "Charmander"]
// console.log(myPokedex.buscarPorNombre("Pikachu")); // Pokemon { ... }
// console.log(myPokedex.buscarPorTipo("fuego")); // [Pokemon { ... }]