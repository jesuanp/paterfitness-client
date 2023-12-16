import React, {useState, useContext} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './authStyles';
import usuarioContext from '../../context/usuario/usuarioContext';

const Signup = ({navigation}) => {

    const { createUsuario, autherror } = useContext(usuarioContext);

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {name, email, password, confirmPassword} = state;

    const handleChange = (e, name) => {
        setState({
            ...state,
            [name]: e
        });
    }

    const handleSubmit = () => {

        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
            Alert.alert('Todos los campos son requeridos');
            return;
        }

        if(password.trim() !== confirmPassword.trim()){
            Alert.alert('Las contraseñas deben ser iguales');
            return;
        }

        createUsuario({name: name, email: email, password: password});
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>

                <View style={styles.headerTitle}>
                    <Text style={styles.title}>Crear Una Cuenta</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Ingresa tu nombre</Text>
                    <TextInput
                        value={name}
                        style={styles.inputs}
                        placeholder='Tu nombre...'
                        onChangeText={(e) => handleChange(e, 'name')}
                        placeholderTextColor='#fff'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Ingresa tu correo</Text>
                    <TextInput
                        value={email}
                        style={styles.inputs}
                        placeholder='Tu correo...'
                        keyboardType='email-address'
                        onChangeText={(e) => handleChange(e, 'email')}
                        placeholderTextColor='#fff'
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Ingresa tu contraseña</Text>
                    <TextInput
                        value={password}
                        style={styles.inputs}
                        placeholder='Tu contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'password')}
                        placeholderTextColor='#fff'
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Confirmar contraseña</Text>
                    <TextInput
                        value={confirmPassword}
                        style={styles.inputs}
                        placeholder='Confirmar contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'confirmPassword')}
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
                        <Text style={{color: '#beed15', fontWeight: 'bold'}}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 10, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Signup;