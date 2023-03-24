import axios from "axios";
import { DEFAULT_URL } from "./constants";

axios.defaults.baseURL = DEFAULT_URL;
axios.defaults.timeout = 120000;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common.Platform = "Web";
// axios.defaults.withCredentials = true;
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;

const instance = axios.create();

export default instance;
