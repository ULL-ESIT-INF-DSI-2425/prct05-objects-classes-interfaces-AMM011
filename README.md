# Práctica 5: Objetos, clases e interfaces
- 👤 Autor: Alfredo Moreno Mondragón
- 📩 Correo institucional: [alu0101515601@ull.edu.es](mailto:alu0101515601@ull.edu.es)
- 👨🏻‍🏫 Profesor: Dr.Eduardo Manuel Segredo González
- 📚 Asignatura: Desarrollo de Sistemas Informáticos
## Objetivo
Esta práctica tiene como objetivo familiarizarse con el uso de objetos, clases e interfaces en TypeScript. A través de ejercicios prácticos, se busca entender cómo aplicar conceptos esenciales de la programación orientada a objetos.

## Ejercicio 1: Combates Pokémon

En este ejercicio se debe crear una Pokédex que almacene información sobre diferentes Pokémon. Cada Pokémon debe contener:

- Nombre
- Peso y altura
- Tipo (fuego, agua, hierba, eléctrico)
- Estadísticas: ataque, defensa, velocidad, HP máximo

La Pokédex permitirá:

- Mostrar la información de cada Pokémon.
- Buscar Pokémon por cualquier criterio (tipo, nombre).

### Simulación de Combate

Además, se debe diseñar una clase `Combat` que simule un combate entre dos Pokémon. El combate funcionará por turnos, siguiendo estas reglas:

- El primer Pokémon en el constructor será el primero en atacar.
- El daño se calcula con la fórmula:
  
  ```
  daño = 50 * (ataque / defensa) * efectividad
  ```

- Los valores de efectividad dependen de los tipos de los Pokémon:
  - Efectivo: 2
  - Neutral: 1
  - No efectivo: 0.5

Las interacciones entre tipos son:

- Fuego > Hierba
- Fuego < Agua
- Fuego = Eléctrico
- Agua < Hierba
- Agua < Eléctrico
- Hierba = Eléctrico

El método `start` mostrará la evolución del combate, actualizando el HP de cada Pokémon tras cada ataque hasta que uno sea derrotado.

## Ejercicio 2: Biblioteca Musical

En este ejercicio se debe desarrollar una aplicación que gestione una biblioteca musical. La estructura debe estar compuesta por clases e interfaces que representen:

- **Canciones**: Cada canción debe incluir:
  - Título
  - Artista
  - Álbum
  - Duración
  - Género

- **Playlists**: Listas de reproducción personalizadas que permitan:
  - Añadir o eliminar canciones
  - Mostrar la duración total de la lista
  - Buscar canciones por título, artista o género

### Funcionalidades clave

- **Reproducción de canciones**: Implementar una función que simule la reproducción de una canción mostrando su título y el tiempo restante hasta finalizar.

- **Gestión de listas**:
  - Crear nuevas playlists
  - Eliminar playlists existentes
  - Mostrar todas las canciones de una playlist

- **Estadísticas**:
  - Número total de canciones en la biblioteca
  - Duración total de todas las canciones
  
Este ejercicio tiene como objetivo practicar el diseño de estructuras complejas usando clases e interfaces en TypeScript, así como aplicar principios de encapsulación y modularidad.

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2425/coverage-coveralls-github-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2425/coverage-coveralls-github-actions/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-AMM011/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-AMM011?branch=main)