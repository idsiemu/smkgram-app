import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createDrawerNavigator();


export default () => {
    return (
        <NavigationContainer>
            <MainNavigation.Navigator initialRouteName="Root" headerMode="none">
                <MainNavigation.Screen name="PhotoNavigation" component={PhotoNavigation} />
                <MainNavigation.Screen name="TabNavigation" component={TabNavigation} />
            </MainNavigation.Navigator>
        </NavigationContainer>
    );
}