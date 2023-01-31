import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/urls";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

export default albumsService;