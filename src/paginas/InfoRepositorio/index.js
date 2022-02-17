import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { DeletarRepositorioDoUsuario, SalvarRepositorioDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function Salvar() {
        const resultado = await SalvarRepositorioDoUsuario(route.params.item.id, nome, data, route.params.item.postId);
        if (resultado === 'sucesso') {
            Alert.alert('Repositório atualizado com sucesso!');
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao atualizar o repositório!');
        }
    }

    async function Deletar() {
        const resultado = await DeletarRepositorioDoUsuario(route.params.item.id);
        if (resultado === 'sucesso') {
            Alert.alert('Repositório deletado com sucesso!');
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao deletar o repositório!');
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
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={Salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={Deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
