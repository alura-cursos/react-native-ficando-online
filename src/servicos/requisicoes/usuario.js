import api from '../api';

export async function buscarUsuario(nomeUsuario) {
    try{
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0];
    }
    catch(erro){
        console.log(erro);
        return {};
    }
}