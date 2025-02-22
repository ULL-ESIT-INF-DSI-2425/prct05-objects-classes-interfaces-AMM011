import { Pokemon } from "./pokemon";
import { Pokedex } from "./Pokedex";

export class Combat {
    // Creamos unos atributos para un pokemon y para el otro
    protected pokemon1: Pokemon;
    protected pokemon2: Pokemon;

    // Creamos un constructos para inicializar los pokemons que se van a enfrentar
    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    // Creamos un método que dara comienzo al combante
    start() {
        // Comenzamos hallando la efectividad de cada pokemon
        let typePokemon1: string = this.pokemon1.getType;
        let typePokemon2: string = this.pokemon2.getType;

        // Ahora creamos una variable donde vamos almacenar z tan efectivo es
        let effectiveness1: number = 0;
        let effectiveness2: number = 0;

        // Ahora hacemos una comprobación de que tal efectivo es
        // Efectivo => efectividad = 2
        // Neutral => efectividad = 1
        // No efectivo => efectividad = 0.5
        if (typePokemon1 === "fuego" && typePokemon2 === "hierba") {
            effectiveness1 = 2;
        } else if (typePokemon1 === "fuego" && typePokemon2 === "agua") {
            effectiveness1 = 0.5;
        } else if (typePokemon1 === "fuego" && typePokemon2 === "eléctrico") {
            effectiveness1 = 1;
        } else if (typePokemon1 === "agua" && typePokemon2 === "hierba") {
            effectiveness1 = 0.5;
        } else if (typePokemon1 === "agua" && typePokemon2 === "eléctrico") {
            effectiveness1 = 0.5;
        } else if (typePokemon1 === "hierba" && typePokemon2 === "eléctrico") {
            effectiveness1 = 1;
        }

        // Ahora para el segundo pokemon
        if (typePokemon2 === "fuego" && typePokemon1 === "hierba") {
            effectiveness2 = 2;
        } else if (typePokemon2 === "fuego" && typePokemon1 === "agua") {
            effectiveness2 = 0.5;
        } else if (typePokemon2 === "fuego" && typePokemon1 === "eléctrico") {
            effectiveness2 = 1;
        } else if (typePokemon2 === "agua" && typePokemon1 === "hierba") {
            effectiveness2 = 0.5;
        } else if (typePokemon2 === "agua" && typePokemon1 === "eléctrico") {
            effectiveness2 = 0.5;
        } else if (typePokemon2 === "hierba" && typePokemon1 === "eléctrico") {
            effectiveness2 = 1;
        }

        // Creamos una variables donde vamos almacenar las vidas de cada pokemon
        let heal1: number = this.pokemon1.getHp;
        let heal2: number = this.pokemon1.getHp;

        while (heal1 > 0 || heal2 > 0) {
            // Creamos una variable donde almacenar el daño
            let damage: number = 0;

            // Comienza atacando el primer pokemon
            damage = 50 * (this.pokemon1.getAttack / this.pokemon2.getDefense) * effectiveness1;

            // Se lo efectuamos a la vida
            heal2 -= damage;

            // Mostramos por pantalla los datos actual de pokemons
            if (heal2 < 0) {
                console.log(`${this.pokemon1.getName} ha ganado a ${this.pokemon2.getName}!!!`);
                break;
            } else {
                console.log(`El daño infligo ha sido ${damage}.`);
                console.log(`El estado actual de ${this.pokemon1.getName} es ${heal1}`);	
                console.log(`El estado actual de ${this.pokemon2.getName} es ${heal2}`);
            }

            // Ahora el turno del siguiente pokemon
            damage = 50 * (this.pokemon2.getAttack / this.pokemon1.getDefense) * effectiveness2;

            // Se lo efectuamos a la vida
            heal1 -= damage;

            // Mostramos por pantalla los datos actual de los pokemons
            if (heal1 < 0) {
                console.log(`${this.pokemon2.getName} ha ganado a ${this.pokemon1.getName}!!!`);
                break;
            } else {
                console.log(`El daño infligo ha sido ${damage}.`);
                console.log(`El estado actual de ${this.pokemon1.getName} es ${heal1}`);
                console.log(`El estado actual de ${this.pokemon2.getName} es ${heal2}`);
            }
        }
    }
}