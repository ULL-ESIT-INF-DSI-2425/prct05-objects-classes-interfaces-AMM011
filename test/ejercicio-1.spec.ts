// Importamos las clases necesarias
import { describe, test, expect, beforeEach } from 'vitest';
import { Pokemon } from '../src/ejercicio-1/Pokemon';
import { Pokedex } from '../src/ejercicio-1/Pokedex';
import { Combat } from '../src/ejercicio-1/Combat';

let pikachu: Pokemon;
let charmander: Pokemon;
let bulbasaur: Pokemon;
let myPokedex: Pokedex;

// Configuración inicial antes de cada prueba
beforeEach(() => {
  pikachu = new Pokemon('Pikachu', 6, 0.4, 'eléctrico', { attack: 55, defense: 40, speed: 90, hp: 35 });
  charmander = new Pokemon('Charmander', 8.5, 0.6, 'fuego', { attack: 52, defense: 43, speed: 65, hp: 39 });
  bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'hierba', { attack: 49, defense: 49, speed: 45, hp: 45 });
  myPokedex = new Pokedex([pikachu]);
});

describe('Pokedex Tests', () => {
  test('debería agregar un nuevo Pokémon a la Pokedex', () => {
    myPokedex.agregarPokemon(charmander);
    expect(myPokedex.mostrarTodos()).toContain('Charmander');
  });

  test('debería encontrar un Pokémon por su nombre', () => {
    myPokedex.agregarPokemon(bulbasaur);
    const found = myPokedex.buscarPorNombre('Bulbasaur');
    expect(found?.getName).toBe('Bulbasaur');
  });

  test('debería buscar por tipo correctamente', () => {
    myPokedex.agregarPokemon(charmander);
    myPokedex.agregarPokemon(bulbasaur);
    const firePokemons = myPokedex.buscarPorTipo('fuego');
    expect(firePokemons.map((p) => p.getName)).toContain('Charmander');
  });
});

describe('Combat Tests', () => {
    test('debería ganar Charmander contra Bulbasaur', () => {
    const combat = new Combat(charmander, bulbasaur);
    const result = combat.start();
    expect(result).toBe('Charmander ha ganado a Bulbasaur!!!');
  });

  test('debería ganar Pikachu contra Charmander', () => {
    const combat = new Combat(pikachu, charmander);
    const result = combat.start();
    expect(result).toBe('Pikachu ha ganado a Charmander!!!');
  });
});
