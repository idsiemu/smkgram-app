import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const MainNavigation =  createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <MainNavigation.Navigator initialRouteName="Root" headerMode="none" mode="modal">
                <MainNavigation.Screen name="TabNavigation" component={TabNavigation} />
                <MainNavigation.Screen name="PhotoNavigation" component={PhotoNavigation} />
                <MainNavigation.Screen name="MessageNavigation" component={MessageNavigation} />
            </MainNavigation.Navigator>
        </NavigationContainer>
    );
}