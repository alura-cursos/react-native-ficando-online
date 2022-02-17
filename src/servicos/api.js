import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.15.43:3000", // endereco IP do computador que esta rodando o servidor (ele pode mudar)
});

export default api;