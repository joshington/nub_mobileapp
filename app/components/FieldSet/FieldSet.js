import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight,Text} from 'react-native';
import styles from './styles';

const FieldSet = ({text,onPress}) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {text}
        </Text>
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.textEdit}>Edit</Text>
        </TouchableHighlight>
    </View>
)
FieldSet.propTypes = {
    text:PropTypes.string,
    onPress:PropTypes.func,
}
export default FieldSet;