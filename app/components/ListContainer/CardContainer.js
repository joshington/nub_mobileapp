import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {View,ImageBackground} from 'react-native';
import styles from './styles';


const path = './images/bobi_another.png'
const CardContainer = ({children}) => (
    <View style={styles.containerList}>
        {children}
    </View>
)

CardContainer.propTypes = {
    children: PropTypes.any,
}

export default CardContainer;