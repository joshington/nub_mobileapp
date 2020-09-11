import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image,Text,StatusBar} from 'react-native';
import styles from './styles';

const ProfileLogo =() => {
    return(
        <View style={styles.profileLogo}>
            <Image resizeMode="contain" source={require('./images/profile_re.png')} />
        </View>
    )
}

ProfileLogo.propTypes = {
    
}
export default ProfileLogo;