import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
// import TabNavigation from "./TabNavigation";
// import PhotoNavigation from "./PhotoNavigation";
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Search from "../screens/Search"
import Notifications from "../screens/Notifications"

const TabNavigation = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <TabNavigation.Nav/>
        </NavigationContainer>
    );
}