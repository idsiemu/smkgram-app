import React from "react";
import styled from "styled-components";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";

const View = styled.View`
    background-color:white;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Image = styled.Image`
    width: ${constants.width / 2.5}px;
    margin-bottom: 0px;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
    color:${props => props.theme.blueColor};
    margin-top: 20px;
    font-weight:600;
`;

export default () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
            <AuthButton text={"Create New Account"} onPress={() => navigation.navigate("Signup")}/>
            <Touchable onPress={() => navigation.navigate("Login")}>
                <LoginLink>
                    <LoginLinkText>Login</LoginLinkText>
                </LoginLink>
            </Touchable>
        </View>
    )
};