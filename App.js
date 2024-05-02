import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './src/screens/home/home.jsx';
import CadDespesa from './src/screens/cad-despesas/cad-despesa.jsx';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="home">

          <Stack.Screen name="home" component={Home} options={ { headerShown: false}} />

          <Stack.Screen name="despesas" component={CadDespesa} options={{
            title: "Despesas",
            headerTitleAlign: "center",
            headerShadowVisible: false
          }} />

        </Stack.Navigator>

    </NavigationContainer>
  );
}