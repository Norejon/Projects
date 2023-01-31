import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}
export default commentsService;