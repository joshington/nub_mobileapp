import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';
//import color from 'color';
import styles from './styles';


const AuthButton = (props) => {
    const {onPress, buttonText} = props; 
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
        </View>
    )
}
AuthButton.propTypes = {
    onPress:PropTypes.func,
    buttonText: PropTypes.string,
}

export default  AuthButton;

