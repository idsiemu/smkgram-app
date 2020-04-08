import React from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../Hooks/useInput";


const View = styled.View`
    background-color:white;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default () => {
    const emailInput = useInput("");
    const handleLogin = () => {
        
    }
    return (
    <View>
        <AuthInput {...emailInput} placeholder="Email" keyboardType="email-address"/>
        <AuthButton text="Log In" onPress={() => null} />
    </View>
    )
};