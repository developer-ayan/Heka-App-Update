import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard'
import Exchange from '../screens/Exchange'
import Stats from '../screens/Stats'
import Setting from '../screens/Setting'
import Login from '../Login/SignUpAuth/Login';
import SignUp from '../Login/SignUpAuth/SignUp'
import Icons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Tabs(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Dashboard"
                tabBarPosition='bottom'

                screenOptions={{
                    // activeTintColor: 'red',
                    tabBarActiveTintColor: '#e5a800',
                    tabBarLabelStyle: { fontSize: 10, },
                    tabBarStyle: {
                        backgroundColor: '#40373a',
                        paddingTop: 10,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,

                    },
                }}

             

            >
                <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons style={{}}
                                name={'home'}
                                color={color}
                                size={23}
                            />
                        )
                    }}


                />
                <Tab.Screen
                    name="Exchange"
                    component={Exchange}
                    options={{
                        
                        
                        tabBarIcon: ({ color, focused }) => (
                            <Fontisto style={{}}
                                name={'arrow-swap'}
                                color={color}

                                size={23}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Stats"
                    component={Stats}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Entypo style={{}}
                                name={'bar-graph'}
                                color={color}
                                size={23}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                style={{}}
                                name={'settings-sharp'}
                                color={color}
                                size={23}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default Tabs;