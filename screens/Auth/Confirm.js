import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../Hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET } from "./AuthQueries";
import { useLogIn } from "../../AuthContext";



const View = styled.View`
    background-color:white;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default ({navigation, route}) => {
    // const navigation = useNavigation();
    const confrimInput = useInput("");
    const logIn = useLogIn();
    const [ loading, setLoding ] = useState(false);
    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            secret:confrimInput.value,
            email: route.params.email
        }
    })
    const handleConfrim =  async () => {
        const { value } = confrimInput;
        if(value === "" || !value.includes(" ")){
            return Alert.alert("Invalid Secret");
        }
        try{
            setLoding(true);
            const {
                data: {confirmSecret}
            } = await confirmSecretMutation();
            if(confirmSecret !== "" || confirmSecret !== false){
                logIn(confirmSecret);
            }else{
                Alert.alert("Wrong secret!");
            }
        }catch(e){
            console.log(e);
            Alert.alert("Can't confirm secret");
        } finally {
            setLoding(false);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput
                    {...confrimInput}
                    placeholder="Secret"
                    returnKeyType="send"
                    onSubmitEditing={handleConfrim}
                    autoCorrect={false}/>
                <AuthButton loading={loading} text="Confirm" onPress={handleConfrim} />
            </View>
        </TouchableWithoutFeedback>
    
    )
};