import React from 'react';
import PropTypes from 'prop-types'
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const ListCard = ({onPress,text, customIcon=null}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor} style={styles.touchable}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {customIcon}
      </View>
    </TouchableHighlight>
);
ListCard.propTypes = {
    text: PropTypes.string,
    onPress:PropTypes.func,
    customIcon:PropTypes.element,
}
export default ListCard;