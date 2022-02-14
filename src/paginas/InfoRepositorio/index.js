import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import api from '../../servicos/api';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    function salvarRepositorio() {
        api.put(`/repos/${route.params.item.id}`, {
            id: route.params.id,
            name: nome,
            data: data,
            postId: route.params.item.postId
        }).then(() => {
            Alert.alert('Repositório atualizado com sucesso!');
            setNome('')
            setData('')
            navigation.goBack();
        }).catch((e) => {
            Alert.alert('Erro ao atualizar o repositório!');
            console.log(e);
        });
    }

    function deletarRepositorio() {
        api.delete(`/repos/${route.params.item.id}`).then(() => {
            Alert.alert('Repositório deletado com sucesso!');
            navigation.goBack();
        }).catch((e) => {
            Alert.alert('Erro ao atualizar o repositório!');
        });
    }    

    return (
        <View style={estilos.container}>
            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TextInput
                value={data}
                onChangeText={setData}
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvarRepositorio}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletarRepositorio}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
