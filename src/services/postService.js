import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/urls";

const postService = {
    getByid: (postId) => axiosService.get(urls.posts + '/' + postId)
}
export default postService;