import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService ={
    getAll:()=> axiosService.get(urls.posts),
    post:(newPost)=> axiosService.post(urls.posts, newPost)
}
export default postsService;