import { Pokemon } from "./Pokemon";
import { Pokedex } from "./Pokedex";

export class Combat {
    // Creamos unos atributos para un pokemon y para el otro
    protected pokemon1: Pokemon;
    protected pokemon2: Pokemon;
    /**
     * 
     * Función que realiza el ataque de un pokemon a otro
     * 
     * @param atacante - Pokemon que ataca
     * @param defensor - Pokemon que defiende
     * @param efectividad - Efectividad del ataque
     * @returns - Daño que se le hace al pokemon
     */
    private realizarAtaque(atacante: Pokemon, defensor: Pokemon, efectividad: number): number {
        return 50 * (atacante.getAttack / defensor.getDefense) * efectividad;
    }

    /**
     * 
     * Función que calcula la efectividad de un ataque
     * 
     * @param tipoAtacante - Tipo del pokemon que ataca
     * @param tipoDefensor - Tipo del pokemon que defiende
     * @returns - Efectividad del ataque
     */
    private calcularEfectividad(tipoAtacante: string, tipoDefensor: string): number {
        const efectividades: { [key: string]: { [key: string]: number } } = {
            "fuego": { "hierba": 2, "agua": 0.5, "eléctrico": 1 },
            "agua": { "fuego": 2, "hierba": 0.5, "eléctrico": 0.5 },
            "hierba": { "agua": 2, "fuego": 0.5, "eléctrico": 1 },
            "eléctrico": { "agua": 2, "hierba": 1, "fuego": 1 }
        };

        return efectividades[tipoAtacante][tipoDefensor] || 1;
    }

    /**
     * 
     * Constructor de la clase Combat
     * 
     * @param pokemon1 - Pokemon 1
     * @param pokemon2 - Pokemon 2
     */
    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    /**
     * 
     * Función que inicia el combate entre dos pokemons
     * 
     * @returns - Mensaje del ganador
     */
    start(): string {
        // creamos donde se almacenara el mensaje del ganador
        let winner: string = "";

        // Comenzamos hallando la efectividad de cada pokemon
        let typePokemon1: string = this.pokemon1.getType;
        let typePokemon2: string = this.pokemon2.getType;

        // Ahora creamos una variable donde vamos almacenar z tan efectivo es
        let effectiveness1: number = this.calcularEfectividad(typePokemon1, typePokemon2);
        let effectiveness2: number = this.calcularEfectividad(typePokemon2, typePokemon1);

        // Creamos una variables donde vamos almacenar las vidas de cada pokemon
        let heal1: number = this.pokemon1.getHp;
        let heal2: number = this.pokemon2.getHp;

        while (heal1 > 0 && heal2 > 0) {
            // Almacenamos el daño que se le va a hacer al pokemon
            let damage = this.realizarAtaque(this.pokemon1, this.pokemon2, effectiveness1);
            // Ahora le restamos el daño a la vida del pokemon
            heal2 -= damage;
            
            // Mostramos el daño que se le ha hecho al pokemon
            console.log(`El daño infligido por ${this.pokemon1.getName} ha sido ${damage.toFixed(2)}.`);

            // Comprobamos si el pokemon ha muerto
            if (heal2 <= 0) {
                winner = `${this.pokemon1.getName} ha ganado a ${this.pokemon2.getName}!!!`;
                break;
            }
        
            // Mostramos la vida que le queda al pokemon
            console.log(`HP restante de ${this.pokemon2.getName}: ${heal2.toFixed(2)}`);
            
            // Ahora hacemos lo mismo para el segundo pokemon
            damage = this.realizarAtaque(this.pokemon2, this.pokemon1, effectiveness2);
            heal1 -= damage;
        
            console.log(`El daño infligido por ${this.pokemon2.getName} ha sido ${damage.toFixed(2)}.`);

            if (heal1 <= 0) {
                winner = `${this.pokemon2.getName} ha ganado a ${this.pokemon1.getName}!!!`;
                break;
            }
        
            console.log(`HP restante de ${this.pokemon1.getName}: ${heal1.toFixed(2)}`);
        }

        return winner;
    }
}