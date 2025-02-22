import { Song } from "./Song";
import { Album } from "./Album";
import { Artist } from "./Artist";

export class MusicLibrary {
    /**
     * Librería que contiene diferentes artistas con sus diferentes datos.
     */
    private library: Artist[];

    /**
     * 
     * Constructor de la clase MusicLibrary
     * 
     * @param artist - Artista
     */
    constructor(library: Artist[]) {
        this.library = library;
    }

    get getLibrary(): Artist[] {
        return this.library;
    }

    /**
     * Método para agregar un artista a la librería
     * 
     * @param artist - Artista a agregar
     */
    addArtist(artist: Artist): void {
        this.getLibrary.push(artist);
    }

    /**
     * 
     * Método que busca un artista por el nombre
     * 
     * @param name - Nombre del artista que se busca
     * @returns - El artista o undefined si no se encontro
     */
    findArtist(name: string): Artist | undefined {
        return this.getLibrary.find((a) => a.getNameArtist === name);
    }

    /**
     * 
     * Método que busca un albúm por el nombre
     * 
     * @param album - Album a buscar
     * @returns - Album encontrado o undefined si no se encontro
     */
    findAlbum(album: string): Album | undefined {
        const library: Artist[] = this.getLibrary;
        let albums: Album[] = [];

        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        return albums.find((a) => a.getNameAlbum === album);
    }

    /**
     * 
     * Método que busca una canción por el nombre
     * 
     * @param song - Canción a buscar
     * @returns - Canción encontrada o undefined si no se encontro
     */
    findSong(song: string): Song | undefined {
        const library: Artist[] = this.getLibrary;
        let albums: Album[] = [];

        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        albums.forEach((album) =>{
            const foundSong = album.getSongsAlbum.find((s) => s.getNameSong === song);
            if (foundSong) return foundSong;
        });

        return undefined;
    }

    displayLibrary(): void {
        console.table(this.getLibrary);
    }
}