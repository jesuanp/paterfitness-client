import React, {useContext} from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from "react-native";

// usuario context
import usuarioContext from "../../context/usuario/usuarioContext";

function Perfil () {

    const {usuario, logout} = useContext(usuarioContext);

    return (
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                <Text>Hola {usuario.name}</Text>
            </View>
            <View>
                <Button
                    title="Cerrar Sesión"
                    color="red"
                    onPress={() => logout()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    }
})

export default Perfil;
