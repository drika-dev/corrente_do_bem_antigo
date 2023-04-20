import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Importe das telas criadas 
import Cadastro from './src/components/cadastro_usuario';
import PermissionForm from './src/components/cadastro_permissoes';


export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='cadastro_usuario' component={Cadastro}/>
        <Stack.Screen name='cadastro_permissao' component={PermissionForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

