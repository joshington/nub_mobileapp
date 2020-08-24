import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import color from 'color';


import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText} = props; //destructuring the props 
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier
    );
    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor={underlayColor}  style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
        </View>
    )
}

InputWithButton.propTypes = {
    onPress:PropTypes.func,
    buttonText:PropTypes.string,
}

export default InputWithButton;