import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createStackNavigator({
    TabNavigation:{
        screen:TabNavigation,
        navigationOptions:{
            title:""
        }
    },
    PhotoNavigation,
}, {
    headerMode:"none",
    mode:"modal"
});

export default createAppContainer(MainNavigation);