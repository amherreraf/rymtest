import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';
import {CharacterScreen} from '../presentation/screens/character/CharacterScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  CharacterScreen: {id: number};
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
    </Stack.Navigator>
  );
};
