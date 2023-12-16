import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './authStyles';
import usuarioContext from '../../context/usuario/usuarioContext';

const Login = ({navigation}) => {

    const { loginUsuario, autherror } = useContext(usuarioContext);

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e, name) => {
        setState({
            ...state,
            [name]: e
        });
    }

    const handleSubmit = () => {

        if(state.email.trim() === ''){
            Alert.alert('escribe tu email');
            return;
        }
        if(state.password.trim() === ''){
            Alert.alert('escribe tu contraseña');
            return;
        }

        loginUsuario({email: state.email, password: state.password});
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>

                <View style={styles.headerTitle}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Ingresa tu correo electrónico
                    </Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder='Tu correo...'
                        keyboardType='email-address'
                        onChangeText={(e) => handleChange(e, 'email')}
                        placeholderTextColor='#fff'
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Ingresa tu contraseña
                    </Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder='Tu contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'password')}
                        placeholderTextColor='#fff'
                    />
                </View>

                {
                    autherror !== '' && <Text style={{color: 'red', textAlign: 'center'}}>{autherror}</Text>
                }

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={{color: '#beed15', fontWeight: 'bold'}}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 10, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sigin')}
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;