import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./Login";
import Signup from "./Signup";

// Context

const StackAuth = createDrawerNavigator();


const AuthScreen = () => {
    
    // const AuthContext = React.useContext(authContext);
    // const {usuarioAutenticado} = AuthContext;
    
    React.useEffect(() => {
    //   usuarioAutenticado();
    }, []);

    return (
        <StackAuth.Navigator>

            <StackAuth.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <StackAuth.Screen
                name='Sigin'
                component={Signup}
                options={{
                    headerShown: false,
                }}
            />

        </StackAuth.Navigator>
    )
}

export default AuthScreen;