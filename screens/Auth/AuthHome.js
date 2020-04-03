import React from "react";
import styled from "styled-components";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Image = styled.Image`
    width: ${constants.width / 2.5};
    margin-bottom: 0px;
`;

const Touchable = styled.TouchableOpacity``;
const SignUpBtn = styled.View`
    background-color:${props => props.theme.blueColor};
    padding: 10px 10px;
    margin: 0px 50px;
    border-radius: 4px;
    width:${constants.width/2};
    margin-bottom: 25px;
`;
const SignUpBtnText = styled.Text`
    color: white;
    text-align: center;
    font-weight: 600;
`;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
    color:${props => props.theme.blueColor};
`;

export default () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
            <Touchable onPress={() => navigation.navigate("Signup")}>
                <SignUpBtn>
                    <SignUpBtnText>Create New Account</SignUpBtnText>
                </SignUpBtn>
            </Touchable>
            <Touchable onPress={() => navigation.navigate("Login")}>
                <LoginLink>
                    <LoginLinkText>Login</LoginLinkText>
                </LoginLink>
            </Touchable>
        </View>
    )
};