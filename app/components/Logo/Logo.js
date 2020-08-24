import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image,Text,Keyboard,Platform} from 'react-native';
import styles from './styles';

const Logo =({addStyles}) => {
    const totalStyles =[styles.logo];
    if(addStyles===true){
        totalStyles.push(styles.cardLogo);
    }
    return(
        <View style={totalStyles}>
            <Image resizeMode="contain" source={require('./images/nup_edited.png')} />
        </View>
    )
}

Logo.propTypes = {
    addStyles: PropTypes.bool,
}
export default Logo;