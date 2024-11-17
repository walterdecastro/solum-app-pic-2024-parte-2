import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const navigation = useNavigation();

    return(
        <View style={[styles.container, {paddingTop: StatusBar.currentHeight}]}>
            <View style={styles.topo}>
                <Image style={styles.imgProfile} source={require('../../../assets/farmer-male.jpg')} />
                <Text style={styles.textTopo}>Fertílio Adubo</Text>
                <FontAwesome name="bars" size={30} color="#2E8B57" style={styles.iconTopoRight}/>
            </View>
            <ScrollView style={styles.feed}>
                <View style={styles.box1}>
                    <View style={styles.feedTitulo}>
                        <Image style={{ width: 25, height: 25, borderRadius: 45}} source={require('../../../assets/farmer-female.png')}/>
                        <Text style={{ fontSize: 15, marginLeft: 10, textAlignVertical: 'center'}}>Flora Agrícola</Text>
                    </View>
                    <View>
                        <View style={styles.feedImagem}>
                            <Image
                                style={{alignItems: 'center'}} 
                                source={require('../../../assets/milho.png')}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 0, borderRadius: 25, padding: 5, textAlignVertical: 'center'}}>
                            <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold'}}>R$ 17,98</Text>
                        </View>
                    </View>
                    <View style={styles.feedDescricao}>
                        <Text>Etiam nec consequat lorem. Praesent ultrices risus at justo suscipit, sagittis vestibulum diam eleifend. Cras aliquam id neque at pharetra. Curabitur vel mattis velit.</Text>
                    </View>
                    <View style={[styles.feedInteracao, { flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <FontAwesome5 name="handshake" size={25} color="#2E8B57"/>
                        <FontAwesome name="comments" size={25} color="#2E8B57"/>
                        <FontAwesome name="share" size={25} color="#2E8B57"/>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.feedTitulo}>
                        <Image style={{ width: 25, height: 25, borderRadius: 45}} source={require('../../../assets/farmer-male-2.png')}/>
                        <Text style={{ fontSize: 15, marginLeft: 10, textAlignVertical: 'center'}}>Agroaldo Ruralista</Text>
                    </View>
                    <View>
                        <View style={styles.feedImagem}>
                            <Image
                                style={{alignItems: 'center'}} 
                                source={require('../../../assets/maquina.png')}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 0, borderRadius: 25, padding: 5, textAlignVertical: 'center'}}>
                            <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold'}}>R$ 1017,98</Text>
                        </View>
                    </View>
                    <View style={styles.feedDescricao}>
                        <Text>Etiam nec consequat lorem. Praesent ultrices risus at justo suscipit, sagittis vestibulum diam eleifend. Cras aliquam id neque at pharetra. Curabitur vel mattis velit.</Text>
                    </View>
                    <View style={[styles.feedInteracao, { flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <FontAwesome5 name="handshake" size={25} color="#2E8B57"/>
                        <FontAwesome name="comments" size={25} color="#2E8B57"/>
                        <FontAwesome name="share" size={25} color="#2E8B57"/>
                    </View>
                    </View>
                <View style={styles.box3}>
                <View>
                <View style={styles.feedTitulo}>
                        <Image style={{ width: 25, height: 25, borderRadius: 45}} source={require('../../../assets/farmer-male-2.png')}/>
                        <Text style={{ fontSize: 15, marginLeft: 10, textAlignVertical: 'center'}}>Serrano Machado</Text>
                    </View>
                    <View>
                        <View style={styles.feedImagem}>
                            <Image
                                style={{alignItems: 'center'}} 
                                source={require('../../../assets/beringela.png')}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 0, borderRadius: 25, padding: 5, textAlignVertical: 'center'}}>
                            <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold'}}>R$ 7,98</Text>
                        </View>
                    </View>
                    <View style={styles.feedDescricao}>
                        <Text>Etiam nec consequat lorem. Praesent ultrices risus at justo suscipit, sagittis vestibulum diam eleifend. Cras aliquam id neque at pharetra. Curabitur vel mattis velit.</Text>
                    </View>
                    <View style={[styles.feedInteracao, { flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <FontAwesome5 name="handshake" size={25} color="#2E8B57"/>
                        <FontAwesome name="comments" size={25} color="#2E8B57"/>
                        <FontAwesome name="share" size={25} color="#2E8B57"/>
                    </View>
                    </View>
                </View>
                <View style={styles.box4}>
                <View>
                <View>
                <View style={styles.feedTitulo}>
                        <Image style={{ width: 25, height: 25, borderRadius: 45}} source={require('../../../assets/farmer-male-2.png')}/>
                        <Text style={{ fontSize: 15, marginLeft: 10, textAlignVertical: 'center'}}>Hortência Flores</Text>
                    </View>
                    <View>
                        <View style={styles.feedImagem}>
                            <Image
                                style={{alignItems: 'center'}} 
                                source={require('../../../assets/tomate.png')}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 0, borderRadius: 25, padding: 5, textAlignVertical: 'center'}}>
                            <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold'}}>R$ 7,98</Text>
                        </View>
                    </View>
                    <View style={styles.feedDescricao}>
                        <Text>Etiam nec consequat lorem. Praesent ultrices risus at justo suscipit, sagittis vestibulum diam eleifend. Cras aliquam id neque at pharetra. Curabitur vel mattis velit.</Text>
                    </View>
                    <View style={[styles.feedInteracao, { flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <FontAwesome5 name="handshake" size={25} color="#2E8B57"/>
                        <FontAwesome name="comments" size={25} color="#2E8B57"/>
                        <FontAwesome name="share" size={25} color="#2E8B57"/>
                    </View>
                    </View>
                </View>
                </View>
            </ScrollView>
            <View style={[styles.rodape, { flexDirection: 'row', justifyContent: 'space-around'}]}>
                <FontAwesome name="home" size={30} color="#8B4513"/>
                <FontAwesome name="search" size={30} color="#8B4513"/>
                <FontAwesome name="users" size={30} color="#8B4513"/>
                <FontAwesome name="cog" size={30} color="#8B4513"/>
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
    topo: {
        padding: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    imgProfile: {
        width: 50,
        height: 50,
    },
    textTopo: {
        marginLeft: -90,
        marginTop: 10,
        fontSize: 24,
    },
    iconTopoRight: {
        marginTop: 10
    },
    feed: {
        flex: 3,
        width: '100%',
    },
    rodape: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    box1: {
        margin: 10,
        padding: 10,
        borderWidth: 1
    },
    box2: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
    },
    box3: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
    },
    box4: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
    },
    feedTitulo: {
        flexDirection: 'row'
    },
    feedImagem: {
        alignItems: 'center',    
    },
    feedDescricao: {
        marginTop: 15,
        fontSize: 15,
    },
    feedInteracao: {
        marginTop: 15,
        flexDirection: 'row'
    }
})