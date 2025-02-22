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
        expect(musicLibrary.getArtists()).toContain(artist3);
    });
});