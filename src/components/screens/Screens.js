import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importo los componentes
import Home from '../home/Home';
import MiEvolucion from '../miEvolucion/MiEvolucion';
import Perfil from '../perfil/Perfil';
import VideoScreen from '../videoScreen/VideoScreen';
import MenuItems from './MenuItems';

const Drawer = createDrawerNavigator();

function Screens () {

    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={ (props) => <MenuItems props={props} /> }

            screenOptions={{
                headerStyle: {backgroundColor: '#beed15'},
                drawerStyle: {backgroundColor: '#beed15'},
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: 'gray',
            }}
        >

            <Drawer.Screen
                name='home'
                options={{title: 'INICIO'}}
                >
                {props => <Home {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name='evolucion'
                component={MiEvolucion}
                options={{title: 'MI EVOLUCIÓN'}}
            />

            <Drawer.Screen
                name='perfil'
                component={Perfil}
                options={{title: 'MI PERFIL'}}
            />

            <Drawer.Screen
                name='video'
                options={{
                    title: 'VIDEO',
                    
                }}
            >
                {props => <VideoScreen {...props} />}
            </Drawer.Screen>

        </Drawer.Navigator> 
    )
}

export default Screens
