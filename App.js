import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import InsightScreen from './screens/InsightScreen';
import ProfileScreen from './screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const CustomHeader = ({ title, imageSource }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
    <Image source={imageSource} style={{ width: 30, height: 30, marginRight: 5 }} />
     <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e8de23',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 13},
      }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({color}) => <Ionicons name='home'size={25} color={color}/>,
          headerTitle: () => (
            <CustomHeader
              title="WATTcher"
              imageSource={require('./assets/Logo.png')}
            />
          ),
        }}
      />
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => <Ionicons name='person'size={25} color={color}/>
        }}/>

        <Tab.Screen name='Insight' component={InsightScreen} options={{
          tabBarLabel: 'Insight',
          tabBarIcon: ({color}) => <MaterialIcons name="insights" size={25} color={color}/>
        }}/>

        <Tab.Screen name='Activity' component={ActivityScreen} options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color}) => <Feather name="activity" size={25} color={color} />
        }}/>     
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
