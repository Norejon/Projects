import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService ={
    getAll:()=> axiosService.get(urls.users),
    post:(newUser)=> axiosService.post(urls.users, newUser)
}
export default usersService;