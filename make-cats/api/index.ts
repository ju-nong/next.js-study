import axios from "axios";

const TIMEOUT = 3;

const config = axios.create({
    baseURL: "https://cataas.com/",
    timeout: TIMEOUT * 1000,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json",
});

export { config as default };
