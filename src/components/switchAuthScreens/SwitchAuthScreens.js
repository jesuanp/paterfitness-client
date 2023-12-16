import React, { useContext } from "react";
import AuthScreen from "../auth/AuthScreen";
import Screens from "../screens/Screens";
import usuarioContext from "../../context/usuario/usuarioContext";

const SwitchAuthScreens = () => {

    const {autenticado} = useContext(usuarioContext);

    if(autenticado){
        return <Screens />
    }

    return <AuthScreen />
}

export default SwitchAuthScreens;