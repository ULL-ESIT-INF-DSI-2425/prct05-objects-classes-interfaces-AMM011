import { PokemonStats } from "./PokemonStats";

/**
 * Clase Pokemon que contiene todas las propiedades de un pokemon
 */
// Podemos utilizar implements PokemonStats, pero tendria que declara cada atributo de la interface dentro de la clase, como si fuera uno nuevo
// En vez de encapsularlo
export class Pokemon {
    // Creamos los atributos 
    private readonly name: string;
    private readonly weight: number;
    private readonly height: number;
    private readonly type: string;
    private readonly stats: PokemonStats;

    /**
     * 
     * Creamos un constructor, para guardar los datos de cada pokemón
     * 
     * @param name - Nombre del pokemón
     * @param weight - Peso del pokemón
     * @param height - Altura del pokemón
     * @param type - Tipo del pokemón
     * @param stats - Estadisticas del pokemon, que son attack, defense, speed y hp
     */
    constructor(name: string, weight: number, height: number, type: string, stats: PokemonStats) {
        if (stats.hp <= 0) {
            throw new Error("Los puntos de vida deben ser mayores que 0");
        }
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.stats = stats;
    }

    // Creamos los getters, para poder obtener el valor de los atributos privados
    get getName(): string {
        return this.name;
    }

    get getWeight(): number {
        return this.weight;
    }

    get getHeight(): number {
        return this.height;
    }

    get getType(): string {
        return this.type;
    }

    get getAttack(): number {
        return this.stats.attack;
    }

    get getDefense(): number {
        return this.stats.defense;
    }

    get getSpeed(): number {
        return this.stats.speed;
    }

    get getHp(): number {
        return this.stats.hp;
    }

    // Creamos un método para mostrar todos los datos de un pokemón
    /**
     * 
     * @returns - Nos devuelve un string con todos los datos de un pokemón
     */
    mostrarInfo(): string {
        return `
        Nombre: ${this.name}
        Peso: ${this.weight} kg
        Altura: ${this.height} m
        Tipo: ${this.type}
        Ataque: ${this.stats.attack}
        Defensa: ${this.stats.defense}
        Velocidad: ${this.stats.speed}
        Puntos de vida: ${this.stats.hp}
        `;
    }
}

// Ejemplo:
// const pikachu = new Pokemon("Pikachu", 6, 0.4, "Electric", { attack: 55, defense: 40, speed: 90, hp: 35 });
// console.log(pikachu.getAttack); // 55
// console.log(pikachu.getDefense); // 40
// console.log(pikachu.getSpeed); // 90
// console.log(pikachu.getHp); 