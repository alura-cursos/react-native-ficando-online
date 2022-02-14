import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import api from '../../servicos/api';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    function criarRepositorio() {
        api.post('/repos', {
            name: nome,
            data: data,
            postId: route.params.id
        }).then(() => {
            Alert.alert('Repositório criado com sucesso!');
            setNome('')
            setData('')
            navigation.goBack();
        }).catch(() => {
            Alert.alert('Erro ao criar o repositório!');
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
            <TouchableOpacity style={estilos.botao} onPress={criarRepositorio}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
