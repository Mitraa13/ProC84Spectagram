import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadScreen from '../screens/ReadScreen';
import WriteScreen from '../screens/WriteScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({route})=>({
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name == "ReadScreen"){
                        iconName = focused
                        ?
                        "book"
                        :
                        "book-outline"
                    }
                    else if(route.name == "WriteScreen"){
                        iconName = focused
                        ?
                        "create"
                        :
                        "create-outline"
                    }
                    return <Ionicons name = {iconName} size={size} color={color} />
                }            
            })
            }
            
            tabBarOptions = {{ activeTintColor:"tomato", inactiveTiniColor:"gray", }}>
                <Tab.Screen 
                    name="Read"
                    component={ReadScreen}
                />
                <Tab.Screen 
                    name="Write"
                    component={WriteScreen}
                />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
