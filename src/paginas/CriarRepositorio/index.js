import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { CriarNovoRepositorioDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function Criar() {
        const resultado = await CriarNovoRepositorioDoUsuario(nome, data, route.params.id);
        if (resultado === 'sucesso') {
            Alert.alert('Repositório criado com sucesso!');
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao criar o repositório!');
        }
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
            <TouchableOpacity style={estilos.botao} onPress={Criar}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
