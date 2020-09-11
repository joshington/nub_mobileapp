import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';


const EvtCardContainer = ({children}) => (
    <View style={styles.eventContainer}>
        {children}
    </View>
)

EvtCardContainer.propTypes = {
    children: PropTypes.any,
}

export default EvtCardContainer;