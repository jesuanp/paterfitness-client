export default (state = initialState, action) => {

    switch(action.type) {

        case "OBTENER TODOS LOS USUARIO": return {
            ...state,
            usuarios: action.payload
        }

        case "CREAR_UN_USUARIO": return {
            ...state,
            token: action.payload,
            autenticado: true
        }

        case "INICIAR_SESION": return {
            ...state,
            token: action.payload,
            autenticado: true
        }

        case "USUARIO_AUTENTICADO": return {
            ...state,
            usuario: action.payload,
            autenticado: true
        }

        case "CERRAR_SESION": return {
            ...state,
            autenticado: false,
            token: null,
            usuario: null
        }

        case "AUTH_ERROR": return {
            ...state,
            autherror: action.payload
        }
        
        default: return state;
    }
}