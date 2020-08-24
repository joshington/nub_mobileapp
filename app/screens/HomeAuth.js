import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,StatusBar, TouchableWithoutFeedback} from 'react-native';
import Container from '../components/Container/Container';
import Logo from '../components/Logo/Logo';
import NewMember from '../components/Text/NewMember';
import AuthButton from '../components/Buttons/AuthButton';

class HomeAuth extends Component{
    signUp = () => {
        console.log('signup button')
    }
    logIn = () => {
        console.log('login action')
    }
    render(){
        return(
            <Container>
                <Logo />
                <NewMember text='New Member' />
                <AuthButton 
                    buttonText="SignUp"
                    onPress={this.signUp}
                />
                {/*<NewMember  text='Or' />*/}
                <AuthButton 
                    buttonText="Login"
                    onPress={this.logIn}
                />
            </Container>
        )
    }
}
export default HomeAuth;