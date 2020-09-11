import React, { Component } from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView } from "react-native";
import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import NewMember from "../components/Text/NewMember";
import ButtonGroup from "../components/Buttons/ButtonGroup";
import InputPlain from "../components/Input/InputPlain";

class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    static navigationOptions = {
        tabBarVisible: false,
    };

    handlePress = () => {
        console.log("pressed opacity");
    };

    handleTextChange = (text) => {
        console.log("change text", text);
    };

    handleSignUp = () => {
        //now implementing  navigation aswell here
        this.props.navigation.navigate("SignUp");
    };

    handleLogin = () => {
        //now for login we direct the user to the home screen
        this.props.navigation.navigate("Home");
    };

    render() {
        return (
            <Container>
                <Logo />
                <NewMember text="Account details" />
                <KeyboardAvoidingView behaviour="padding">
                    <InputPlain />
                </KeyboardAvoidingView>
                <ButtonGroup buttonText="Login" onPress={this.handleLogin} />
                <ButtonGroup
                    buttonText="Register"
                    onPress={this.handleSignUp}
                />
            </Container>
        );
    }
}
export default Login;
