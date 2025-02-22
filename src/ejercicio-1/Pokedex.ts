import { Pokemon } from "./pokemon";

export class Pokedex {
    // Creamos un atributo que contendra la lista de pokemons, como la pokedex
    private pokedex: Pokemon[];

    // Constructor para crear una pokedex
    constructor(pokedex: Pokemon[]) {
        this.pokedex = pokedex;
    }

    // Creamos los metodos diferentes métodos para que funcione la pokedex

    // Creamos un método para agregar un pokemon
    agregarPokemon(pokemon: Pokemon): void {
        if (!this.pokedex.some((p) => p.getName === pokemon.getName)) {
            this.pokedex.push(pokemon);
        } else {
            console.log(`El Pokémon ${pokemon.getName} ya está en la Pokédex.`);
        }
    }

    // Creamos un método para mostrar todos los pokemons
    // mostrarTodos(): void {
    //     this.pokedex.forEach((pokemon) => {
    //         console.log(pokemon.getName);
    //     });
    // }

    // Creamos un método que devuelva una lista con los nombres de los pokemons
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

    // Creamos un método para buscar un pokemón por el nombre 
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

    // Creamos un método para buscar pokemons por un tipo
    buscarPorTipo(type: string): Pokemon[] | undefined {
        // Creamos una variable, donde vamos a almacenar los pokemons de un tipo en concreto
        let pokemons: Pokemon[] | undefined;

        // Recorremos la pokedex
        this.pokedex.forEach((pokemon) => {
            if (type === pokemon.getType) pokemons?.push(pokemon);
        });

        // retornamos la lista de los pokemons
        return pokemons;
        // Manera mas eficiente con filter para buscar los pokemons por el tipo
        // return this.pokedex.filter(pokemon => pokemon.getType === type);
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