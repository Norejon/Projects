import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/urls";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}

export default todosService;