import { useReducer } from "react";
import usuarioContext from "./usuarioContext";
import usuarioReducer from "./usuarioReducer";
import clienteAxios from "../../config/clienteAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tokenAuth from "../../config/tokenAuth";


const UsuarioState = ({children}) => {

    const initialState = {
        usuario: {},
        usuarios: [],
        token: '',
        autenticado: false,
        autherror: ''
    }

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const getAllUsers = async () => {

        try {

            const response = await clienteAxios.get('/get-usuarios');

            console.log(response.data)
    
            dispatch({
                type: "OBTENER TODOS LOS USUARIO",
                payload: response.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const createUsuario = async (user) => {

        try {

            const response = await clienteAxios.post('/add-usuario', user);
            const token = response.data.token;

            await AsyncStorage.setItem('token', token);

            dispatch({
                type: "CREAR_UN_USUARIO",
                payload: token
            })

            usuarioAutenticado()
            
        } catch (error) {
            console.log(error);
            authError(error.response.data.msg)
        }
    }


    const loginUsuario = async (user) => {

        try {
            
            const response = await clienteAxios.post('/login-usuario', user);
            const token = response.data.token;

            await AsyncStorage.setItem('token', token);

            dispatch({
                type: "INICIAR_SESION",
                payload: token
            })

            usuarioAutenticado();

        } catch (error) {
            console.log(error);
            authError(error.response.data.msg)
        }
    }

    const usuarioAutenticado = async () => {

        try{

            const token = await AsyncStorage.getItem('token');

            if(token !== null){
                tokenAuth(token);
            }

            const response = await clienteAxios.get('/usuario-autenticado');

            dispatch({
                type: "USUARIO_AUTENTICADO",
                payload: response.data
            })

        }
        catch(err){
            console.log(err);
        }
    }

    const logout = async () => {

        await AsyncStorage.removeItem('token');

        tokenAuth();

        dispatch({
            type: "CERRAR_SESION"
        })
    }
    
    const authError = (msg) => {
        dispatch({
            type: "AUTH_ERROR",
            payload: msg
        });

        // Esta función es para quitar el error una vez pasado 3 segundos
        setTimeout(()=>{
            dispatch({
                type: "AUTH_ERROR",
                payload: ''
            });
        }, 3000)
    }

    return (
        <usuarioContext.Provider
            value={{
                usuarios: state.usuarios,
                token: state.token,
                usuario: state.usuario,
                autenticado: state.autenticado,
                autherror: state.autherror,

                getAllUsers,
                createUsuario,
                loginUsuario,
                usuarioAutenticado,
                logout
            }}
        >
            {children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;