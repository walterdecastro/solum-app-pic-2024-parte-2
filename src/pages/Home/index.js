import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}><Text>Solum</Text><Text style={{color: '#8B4513'}}>App</Text></Text>
                <Text style={styles.subtitulo}>O app do pequeno produtor</Text>
            </View>
            <View style={styles.viewButton}>
                <Button title="Entrar" color="#2E8B57" onPress={ () => navigation.navigate('Login') }/>
            </View>
            <View style={styles.viewRodape}>
                <Text style={styles.textViewRodape}>1.0.0</Text>
            </View>
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
    viewButton: {
        marginTop: 20,
    },
    viewRodape: {
        position: 'absolute',
        bottom: 0
    },
    textViewRodape: {
        fontSize: 12
    }
})