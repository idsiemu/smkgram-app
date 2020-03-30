import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

const MessageNavigation = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <MessageNavigation.Navigator initialRouteName="Message">
                <MessageNavigation.Screen name="Message" component={Message} />
                <MessageNavigation.Screen name="Messages" component={Messages} />
            </MessageNavigation.Navigator>
        </NavigationContainer>
    )
}