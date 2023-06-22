import axiosConfig from "./axios";

export default class DataService {
    async getAllSongs () {
        return axiosConfig.get("/songs/?format=json")
    }
}