import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function MenuItems ({props: {navigation}}) {

    const [actualScreen, setActualScreen] = React.useState(navigation.getState().index)

    React.useEffect(()=>{
        setActualScreen(navigation.getState().index)
    },[navigation.getState()])

    return (
        <DrawerContentScrollView>

            <TouchableOpacity

                style={actualScreen === 0 ? styles.actualScreen : styles.screens}
                onPress={() => navigation.navigate('home')}
            >
                <Text style={actualScreen === 0 && styles.text}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={actualScreen === 1 ? styles.actualScreen : styles.screens}
                onPress={() => navigation.navigate('evolucion')}
            >
                <Text style={actualScreen === 1 && styles.text}>MI EVOLUCIÓN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={actualScreen === 2 ? styles.actualScreen : styles.screens}
                onPress={() => navigation.navigate('perfil')}
            >
                <Text style={actualScreen === 2 && styles.text}>PERIL</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    screens: {
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8
    },
    actualScreen: {
        padding: 15,
        backgroundColor: 'gray',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
    },
    text: {
        color: '#fff'
    }
})

export default MenuItems;
