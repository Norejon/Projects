import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/urls";

const postService = {
    getById: (postId) => axiosService.get(urls.posts + '/' + postId)
}
export default postService;