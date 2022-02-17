import api from '../api';

export async function PegarRepositoriosDoUsuario(id){
    const resultado = await api.get(`/posts/${id}/repos`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    })
    return resultado;
}

export async function SalvarRepositorioDoUsuario(id, nome, data, postId) {
    const resultado = await api.put(`/repos/${id}`, {
        id: id,
        name: nome,
        data: data,
        postId: postId
    }).then(() => {
        return 'sucesso';
    }).catch(error => {
        console.log(error);
        return 'erro';
    });
    return resultado;
}

export async function CriarNovoRepositorioDoUsuario(nome, data, postId) {
    const resultado = await api.post('/repos', {
        name: nome,
        data: data,
        postId: postId
    }).then(() => {
        return 'sucesso';
    }).catch( error => {
        console.log(error);
        return 'erro';
    });
    return resultado;
}

export async function DeletarRepositorioDoUsuario(id) {
    const resultado = await api.delete(`/repos/${id}`).then(() => {
        return 'sucesso';
    }).catch(error => {
        console.log(error);
        return 'erro';
    });
    return resultado;
}