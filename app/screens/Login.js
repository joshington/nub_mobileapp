import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, KeyboardAvoidingView} from 'react-native';
import Container from '../components/Container/Container';
import Logo from  '../components/Logo/Logo';
import NewMember from '../components/Text/NewMember';
import InputWithText from '../components/TextInput/InputWithText';
import ButtonGroup from '../components/Buttons/ButtonGroup';
import InputPlain from '../components/Input/InputPlain';
import SignUp from './FinalSignUp';


class Login extends Component {
    static propTypes = {
        navigation:PropTypes.object,
    }
    static navigationOptions = {
        tabBarVisible:false,
    }
    handlePress = () => {
        console.log('pressed opacity');
    }
    handleTextChange = () => {
        console.log('change text', text)
    }
    handleSignUp = () => {
        //now implementing  navigation aswell here
        this.props.navigation.navigate('SignUp');
    }                                  
    handleLogin = () => {
        //now for login we direct the user to the home screen
        this.props.navigation.navigate('Home');
    }
    render(){
        return(
            <Container>
                <Logo />
                <NewMember text="Account details" />
                <KeyboardAvoidingView behaviour="padding">
                    <InputPlain />
                </KeyboardAvoidingView>
                <ButtonGroup  buttonText="Login" onPress={this.handleLogin} />
                <ButtonGroup  buttonText="Register" onPress={this.handleSignUp} />
              
            </Container>
        )
    }
}
export default Login;