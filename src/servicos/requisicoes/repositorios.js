import api from '../api';

export async function pegarRepositoriosDoUsuario(id){
    try{
        const resultado = await api.get(`/posts/${id}/repos`);
        return resultado.data;
    }
    catch(erro){
        console.log(erro);
        return [];
    }
}

export async function salvarRepositorioDoUsuario(id, nome, data, postId) {
    try {
        await api.put(`/repos/${id}`, {
            id: id,
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso';
    }
    catch (erro) {
        console.log(erro);
        return 'erro';
    }
}

export async function criarNovoRepositorioDoUsuario(nome, data, postId) {
    try {
        await api.post('/repos', {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso';
    }
    catch (erro) {
        console.log(erro);
        return 'erro';
    }
}

export async function deletarRepositorioDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso';
    }
    catch (erro) {
        console.log(erro);
        return 'erro';
    }
}