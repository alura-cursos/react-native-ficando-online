import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import api from '../../servicos/api';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    function buscar() {
        api.get(`/users?login=${nomeUsuario}`).then(response => {
            setUsuario(response.data[0]);
            setNomeUsuario('');
        }).catch(error => {
            console.log(error);
            Alert.alert('Atenção:', 'Erro ao buscar usuário');
        });
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                    usuario?.email &&
                    <>
                        <View style={estilos.fundo} />
                        <View style={estilos.imagemArea}>
                            <Image source={{ uri: usuario?.avatar_url }} style={estilos.imagem} />
                        </View>
                        <Text style={estilos.textoNome}>{usuario?.name}</Text>
                        <Text style={estilos.textoEmail}>{usuario?.email}</Text>
                        <View style={estilos.seguidoresArea}>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario?.followers}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                            </View>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario?.following}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
                            <Text style={estilos.repositorios}>
                                Ver os repositórios
                            </Text>
                        </TouchableOpacity>
                    </>
                }

                <TextInput
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />

                <TouchableOpacity style={estilos.botao} onPress={buscar}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
