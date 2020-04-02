import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Image = styled.Image`
    width: ${constants.width / 2.5};
    margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity``;

export default ({navigation}) => (
    <View>
        <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    </View>
);