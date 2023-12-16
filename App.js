import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SwitchAuthScreens from './src/components/switchAuthScreens/SwitchAuthScreens';

// context state
import UsuarioState from './src/context/usuario/UsuarioState';


export default function App() {
  return (
    <UsuarioState>
    <NavigationContainer>

      <SwitchAuthScreens />

    </NavigationContainer>
    </UsuarioState>
  );
}
