import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

/*import HomeScreen from "./src/components/cadastro_permissoes";
import NotificationsScreen from "./src/components/cadastro_permissoes";*/
import Cadastro_Doacao from "./src/components/cadastro_doacao";
import Blog_Obras from "./src/components/fotos-obras";
import Cadastro_Usuario from "./src/components/cadastro_usuario";
import Cadastro_Permissao from "./src/components/cadastro_permissoes";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Cadastro_usuario" component={Cadastro_Usuario} />
        <Drawer.Screen name="Blog_obras" component={Blog_Obras} />
        <Drawer.Screen name="Cadastro_doacao" component={Cadastro_Doacao} />
        <Drawer.Screen
          name="Cadastro_permissao"
          component={Cadastro_Permissao}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// Importe das telas criadas
import Obras from "./src/components/fotos-obras";
import Cadastro from "./src/components/cadastro_usuario";
import PermissionForm from "./src/components/cadastro_permissoes";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="fotos-obras" component={Obras} />
        <Stack.Screen name="cadastro_usuario" component={Cadastro} />
        <Stack.Screen name="cadastro_permissao" component={PermissionForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
