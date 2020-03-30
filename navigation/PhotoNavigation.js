import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const material = createMaterialTopTabNavigator();

const stack =  createStackNavigator();

function PhotoTabs() {
    return (
        <material.Navigator tabBarPosition="bottom">
            <material.Screen name="SelectPhoto" component={SelectPhoto}/>
            <material.Screen name="TakePhoto" component={TakePhoto}/>
        </material.Navigator>
    );
  }

export default () => {
    return (
        <stack.Navigator initialRouteName="PhotoTabs">
            <stack.Screen name="PhotoTabs" component={PhotoTabs}/>
            <stack.Screen name="UploadPhoto" component={UploadPhoto}/>
        </stack.Navigator>
    );
}