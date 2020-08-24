import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';


const CardLogo =({source}) => {
    return (
        <view>
            <Image  resizeMode="cover" source={source} />
        </view>
    )
}

CardLogo.propTypes = {

}
export default CardLogo;