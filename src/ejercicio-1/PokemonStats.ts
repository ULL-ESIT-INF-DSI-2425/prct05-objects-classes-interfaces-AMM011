/**
 * Interfaz que representa las estadisticas de un pokemón
 * @module
 * @interface PokemonStats
 * @property {number} attack - Ataque del pokemón
 * @property {number} defense - Defensa del pokemón
 * @property {number} speed - Velocidad del pokemón
 * @property {number} hp - Puntos de vida del pokemón
 * @example
 * const stats: PokemonStats = { attack: 55, defense: 40, speed: 90, hp: 35 };
 */
export interface PokemonStats {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
}