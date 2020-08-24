import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Container from '../components/Container/Container';
import Logo from  '../components/Logo/Logo';
import NewMember from '../components/Text/NewMember';
import InputWithText from '../components/TextInput/InputWithText';
import ButtonGroup from '../components/Buttons/ButtonGroup';
import InputPlain from '../components/Input/InputPlain';

class SignUp extends Component {
    handlePress = () => {
        console.log('pressed opacity');
    }
    handleTextChange = () => {
        console.log('change text', text)
    }
    render(){
        return(
            <Container>
                <Logo />
                <NewMember text="Account details" />
                <InputPlain />
                <ButtonGroup  buttonText="SignUp" />
                
              
            </Container>
        )
    }
}
export default SignUp;