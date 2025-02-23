import { describe, test, expect, beforeEach } from 'vitest';
import { Song } from '../src/ejercicio-2/Song';
import { Album } from '../src/ejercicio-2/Album';
import { Artist } from '../src/ejercicio-2/Artist';
import { MusicLibrary } from '../src/ejercicio-2/MusicLibrary';

// Comenzamos creando las canciones
let song1: Song;
let song2: Song;

// Ahora creamos los albumes
let album1: Album;
let album2: Album;

// Creamos los artistas
let artist1: Artist;
let artist2: Artist;

// Creamos la libreria de música
let musicLibrary: MusicLibrary;

// Configuración inicial antes de cada prueba
beforeEach(() => {
    song1 = new Song('Song1', 180, ['Pop', 'Rock'], true, 1000);
    song2 = new Song('Song2', 200, ['Pop'], true, 2000);
    
    album1 = new Album('Album1', 2010, [song1]);
    album2 = new Album('Album2', 2000, [song2]);
    
    artist1 = new Artist('Artist1', 1000, [album1]);
    artist2 = new Artist('Artist2', 2000, [album2]);
    
    musicLibrary = new MusicLibrary([artist1, artist2]);
});

describe('MusicLibrary Tests', () => {
    test('debería agregar un nuevo artista a la librería de música', () => {
        const artist3 = new Artist('Artist3', 3000, [album1]);
        musicLibrary.addArtist(artist3);
        expect(musicLibrary.findArtist("Artist3")).toEqual(artist3);
    });

    test('debería encontrar un artista existente en la librería de música', () => {
        expect(musicLibrary.findArtist("Artist1")).toEqual(artist1);
    });

    test('debería eliminar un artista de la librería de música', () => {
        expect(musicLibrary.findAlbum("Album1")).toEqual(album1);
    });

    test('debería agregar un nuevo álbum a un artista existente', () => {
        const album3 = new Album('Album3', 2020, [song1, song2]);
        const artist3 = new Artist('Artist3', 3000, [album3]);
        // toContain sirve para verificar si un elemento está dentro de un array
        expect(artist3.albums).toContain(album3);
    });

    test('debería encontrar una canción en la librería de música', () => {
        expect(musicLibrary.findSong("Song1")).toEqual(song1);
    });

    test('debería devolver una duración total de 200 + 180 = 380', () => {
        expect(musicLibrary.getDuration()).toEqual(380);
    });

    test('debería devolver el número de canciones de un álbum', () => {
        expect(musicLibrary.getSongs()).toEqual(2);
    });
    
    test('debería devolver la suma de reproducciones de todas las canciones', () => {
        expect(musicLibrary.getTotalPlays()).toEqual(3000);
    });

    test('debería agregar una canción a un álbum', () => {
        const song3 = new Song('Song3', 220, ['Jazz'], true, 3000);
        const album3 = new Album('Album3', 2020, [song1, song2, song3]);
        const artist3 = new Artist('Artist3', 3000, [album3]);
        musicLibrary.addArtist(artist3);
        expect(musicLibrary.findSong("Song3")).toEqual(song3);
    });

    test('debería encontrar un álbum en la librería de música', () => {
        expect(musicLibrary.findAlbum("Album1")).toEqual(album1);
    });

    test('debería devolver undefined si no se encuentra una canción', () => {
        expect(musicLibrary.findSong("Song3")).toBeUndefined();
    });
});

describe('Song Tests', () => {
    test('debería devolver la lista de géneros de una canción', () => {
        expect(song1.getGenreSong).toEqual(['Pop', 'Rock']);
    });
    test('debería devolver si una canción es un single', () => {
        expect(song1.getSingleSong).toEqual(true);
    });
});

describe('Artist Tests', () => {
    test('debería devolver el número de oyentes de un artista', () => {
        expect(artist1.getListenersArtist).toEqual(1000);
    });
});

describe('Album Tests', () => {
    test('debería devolver el año de lanzamiento del álbum', () => {
        expect(album1.getreleaseAlbum).toEqual(2010);
    });
});