import api from '../api';

export async function BuscarUsuario(nomeUsuario) {
    const resultado = await api.get(`/users?login=${nomeUsuario}`).then(response => {
        return response.data[0];
    }).catch(error => {
        console.log(error);
        return {};
    });
    return resultado;
}