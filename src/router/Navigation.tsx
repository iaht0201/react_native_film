import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Detail from "../screen/Detail";


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}
function AppNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={screenOptionStyle} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}
export default AppNavigation; 