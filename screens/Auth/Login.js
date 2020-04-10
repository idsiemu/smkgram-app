import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../Hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { useNavigation } from '@react-navigation/native';
import { LOG_IN } from "./AuthQueries";



const View = styled.View`
    background-color:white;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default () => {
    const emailInput = useInput("");
    const [ loading, setLoding ] = useState(false);
    const requestSecret = useMutation(LOG_IN, {
        variables : {
            email: emailInput.value
        }
    });
    const handleLogin =  async () => {
        const navigation = useNavigation();
        const { value } = emailInput;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(value === ""){
            return Alert.alert("Email can't be empty");
        }else if(!value.includes("@") || !value.includes(".")){
            return Alert.alert("Please write an email");
        }else if(!emailRegex.test(value)){
            return Alert.alert("That email is invalid");
        }
        try{
            setLoding(true);
            await requestSecret();
            Alert.alert("check your email");
            navigation.navigate("Confirm");
        }catch(e){
            Alert.alert("Can't log in now");
        } finally {
            setLoding(false);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput
                    {...emailInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send"
                    onEndEditing={handleLogin}
                    autoCorrect={false}/>
                <AuthButton loading={loading} text="Log In" onPress={handleLogin} />
            </View>
        </TouchableWithoutFeedback>
    
    )
};