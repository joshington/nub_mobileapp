import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithOpacity = (props) => {
    const { onPress, placeholder, editable= true } = props; //destructuring the props 

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier
    );//just modifying the color by a certain degree, here by 0.1.

    const containerStyles = [styles.container];
    if(editable === false){
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            {/*<TouchableOpacity underlayColor={underlayColor}  style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{OpacityText}</Text>
            </TouchableOpacity>
            <View  style={styles.border} />
            */}
            <TextInput  style={styles.input} underlineColorAndroid="#000000" 
             {...props}
             
            />
        </View>
    )
}

InputWithOpacity.propTypes = {
    onPress:PropTypes.func,
    placeholder:PropTypes.string,
    editable: PropTypes.bool,

}

export default InputWithOpacity;