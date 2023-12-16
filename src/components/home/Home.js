import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import usuarioContext from '../../context/usuario/usuarioContext';
import linksVideos from './linksVideos';


// carrousel
import CarouselHome from './CarouselHome';


export default function Home ({navigation}) {

    const {usuario} = useContext(usuarioContext);

    return (
        <ScrollView>

            <View style={styles.containerPerfil}>
                <View style={styles.viewImg}>

                    <Image style={styles.img} source={require('../../../public/photo-perfil.jpg')} />
                
                </View>

                <View>
                    <Text style={styles.nameUser}>{usuario && usuario?.name}</Text>
                    <Text style={{textAlign: 'center'}}>HOLA</Text>
                </View>
            </View>


            <View style={styles.sectionOne}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        SUGERIDOS
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('video')}>
                        <Text>See all  {'>'}</Text>
                    </TouchableOpacity>
                    <CarouselHome navigation={navigation} videos={linksVideos.sugeridos} />
                </View>
            </View>

            <View style={styles.sectionOne}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        CARDIO
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.touchable}>
                        <Text>See all  {'>'}</Text>
                    </TouchableOpacity>
                    <CarouselHome navigation={navigation} videos={linksVideos.cardio} />
                </View>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150
    },
    viewImg: {
        width: 120,
        height: 120,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#498523',
        borderRadius: 100
    },
    containerPerfil: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center'
    },
    nameUser: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    viewTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 20
        // backgroundColor: '#141414',
    },
    title: {
        fontSize: 20,
    },
    touchable: {
        marginBottom: 10,
        marginRight: 20,
        alignSelf: 'flex-end'
    }
});
