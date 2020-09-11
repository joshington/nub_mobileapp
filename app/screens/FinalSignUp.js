import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Alert,Modal,StyleSheet,Text,TouchableHighlight,View} from "react-native";
import Logo from '../components/Logo/Logo';
import ModalSign from '../components/Modal/ModalSign';
import AuthButton from '../components/Buttons/AuthButton';

class  SignUp extends Component {
    static propTypes = {
        navigation:PropTypes.object,
    }
    getHome = () => {
        this.props.navigation.navigate('Home');
    }
    render(){
        return(
            <>
                <Logo addStyles={true} />
                <ModalSign />
            </>
        )
    }
}
export default SignUp;