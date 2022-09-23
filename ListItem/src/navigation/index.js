import DetailsScreen from "../Screens/DetailsScreen";
import Details from "../components/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name='home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
export default RootNavigator;