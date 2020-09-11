import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';


const SetInput =() => {
    return (
        <TextInput 
            onChangeText={onPress}
        />
    )
}

export default SetInput;