import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../Hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./AuthQueries";



const View = styled.View`
    background-color:white;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default ({navigation, route}) => {
    const fNameInput = useInput("");
    const lNameInput = useInput("");
    const emailInput = useInput(route.parmas ? route.parmas.email : "");
    const nameInput = useInput("");
    const [ loading, setLoding ] = useState(false);
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            name: nameInput.value,
            email: emailInput.value,
            firstName: fNameInput.value,
            lastName: lNameInput.value
        }
    })
    const handleSignup =  async () => {
        const { value:fName } = fNameInput;
        const { value:lName } = lNameInput;
        const { value:email } = emailInput;
        const { value:name } = nameInput;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email)){
            return Alert.alert("That email is invalid");
        }
        if(fName === ""){
            return Alert.alert("i need your name");
        }
        if(name === ""){
            return Alert.alert("Invalid username");
        }
        try{
            setLoding(true);
            const { data: {createAccount} } = await createAccountMutation();
            if(createAccount){
                Alert.alert("Account created", "Log in now");
                navigation.navigate("Login", {email});
            }
        }catch(e){
            console.log(e);
            Alert.alert("Username taken.");
            navigation.navigate("Login", {email})
        } finally {
            setLoding(false);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput
                    {...fNameInput}
                    placeholder="First name"
                    autoCapitalize="words"/>
                <AuthInput
                    {...lNameInput}
                    placeholder="Last name"
                    autoCapitalize="words"/>
                <AuthInput
                    {...emailInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send"
                    autoCorrect={false}/>
                <AuthInput
                    {...nameInput}
                    placeholder="name"
                    returnKeyType="send"
                    autoCorrect={false}/>
                <AuthButton loading={loading} text="Sign up" onPress={handleSignup} />
            </View>
        </TouchableWithoutFeedback>
    
    )
};