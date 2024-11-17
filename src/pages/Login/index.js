import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = () => {
        const emailUpper = email.toUpperCase()
        if(emailUpper === 'USER@EMAIL.COM' && senha == 12345){
            navigation.navigate('Profile')
        }
      };
    return(
        <View style={styles.container}>
            <View style={{ alignItems: 'center'}}>
                <Text style={styles.titulo}><Text>Solum</Text><Text style={{color: '#8B4513'}}>App</Text></Text>
                <Text style={styles.subtitulo}>Faça o seu login</Text>
            </View>
                <TextInput
                    style={[styles.inputForm, { marginBottom: -10}]}
                    placeholder="Email:"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={styles.inputForm}
                    placeholder="Senha:"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(value) => setSenha(value)}
                />
            <Button title="Login" color="#2E8B57" onPress={ fazerLogin }/>
                <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    titulo: {
        fontFamily: 'Trebuchet MS',
        fontSize: 45,
        fontWeight: 'bold',
        color:'#2E8B57'
    },
    subtitulo: {
        fontSize: 17,
    },
    viewTitulo: {
        
    },
    inputForm: {
        borderRadius: 5,
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#2E8B57',
        marginTop: 30,
        marginBottom: 30
    }
})