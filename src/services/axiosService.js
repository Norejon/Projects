import axios from "axios";
import {baseUrl} from "../configs/urls/urls";

const axiosService = axios.create({baseURL: baseUrl});

export {axiosService};
