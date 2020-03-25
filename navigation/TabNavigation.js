import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const StackFactory = (initialRoute, customConfig) => createStackNavigator(
    {
        InitialRoute: {
            screen: initialRoute,
            navigationOptions: {...customConfig}
        } 
    }
);

export default createBottomTabNavigator(
    {
        Home: {
            screen: StackFactory(Home, {
                title: "Home",
                headerRight: <Text>Hello</Text>
            })
        },
        Search: {
            screen: StackFactory(Search, {
                title: "Search"
            })
        },
        Add: {
            screen: View,
            navigationOptions: {
                tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
            }
        },
        Notifications: {
            screen: StackFactory(Notifications, {
                title: "Notifications"
            })
        },
        Profile: {
            screen: StackFactory(Profile, {
                title: "Profile"
            })
        }
    }
);
