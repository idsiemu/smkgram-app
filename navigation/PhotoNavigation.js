import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from "../screens/Photo/SelectPhoto"
import TakePhoto from "../screens/Photo/TakePhoto"
import UploadPhoto from "../screens/Photo/UploadPhoto"

// const PhotoTabs = createMaterialTopTabNavigator(
//     {
//         SelectPhoto,
//         TakePhoto
//     },{
//         tabBarPosition:"bottom"
//     }
// );

// export default createStackNavigator(
//     {
//         PhotoTabs,
//         UploadPhoto
//     }
// )

const PhotoTabs = createMaterialTopTabNavigator();

export default () => {
    return (
        <PhotoTabs.Navigator tabBarPosition="top">
            <PhotoTabs.Screen name="SelectPhoto" component={SelectPhoto}/>
            <PhotoTabs.Screen name="TakePhoto" component={TakePhoto}/>
            <PhotoTabs.Screen name="UploadPhoto" component={UploadPhoto}/>
        </PhotoTabs.Navigator>
        // <UploadPhoto.Navigator>
        //     <UploadPhoto.Screen name="UploadPhoto" component={UploadPhoto}/>
        // </UploadPhoto.Navigator>
    );
}