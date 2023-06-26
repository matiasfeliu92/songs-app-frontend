import axiosConfig from "./axios";

export default class DataService {
    async getAllSongs () {
        return axiosConfig.get("/songs")
    }

    async newSong (title: string, artist: string, album: string, duration: string, genre: string, image: string, you_tube: string) {
        return axiosConfig.post("/songs", {title, artist, album, duration, genre, image, you_tube})
    }

    async getAllArtists () {
        return axiosConfig.get("/artists")
    }

    async getAllGenres () {
        return axiosConfig.get("/genres")
    }
} 