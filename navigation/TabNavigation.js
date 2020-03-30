import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Search from "../screens/Search"
import Notifications from "../screens/Notifications"

const stack = createStackNavigator();

function stackFactory({route, navigation}) {
    const { initialRoute, customConfig } = route.params;
    return (
        <stack.Navigator initialRoute="Home">
            <stack.Screen name={route.name} component={initialRoute} options={customConfig} />
        </stack.Navigator>
    );
}

const TabNavigation = createBottomTabNavigator();

export default () => {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Home" component={stackFactory} initialParams={{
                initialRoute: Home,
                customConfig: {
                    title: 'Home',
                    headerRight: () => (
                        <TouchableOpacity>
                            <Text>Hello</Text>
                        </TouchableOpacity>
                    )
                }
            }}/>
            <TabNavigation.Screen name="Profile" component={stackFactory} initialParams={{
                initialRoute: Profile,
                customConfig: {
                    title: 'Profile'
                }
            }}/>
            <TabNavigation.Screen name="Add" component={View} listeners={({ navigation }) => ({
                tabPress: e => {
                e.preventDefault();
                navigation.navigate('PhotoNavigation');
                },
            })} />
            <TabNavigation.Screen name="Notifications" component={stackFactory} initialParams={{
                initialRoute: Notifications,
                customConfig: {
                    title: 'Notifications'
                }
            }} />
            <TabNavigation.Screen name="Search" component={stackFactory} initialParams={{
                initialRoute: Search,
                customConfig: {
                    title: 'Search'
                }
            }} />
        </TabNavigation.Navigator>
    );
}