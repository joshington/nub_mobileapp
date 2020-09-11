import React, { useState, Component} from "react";
import  PropTypes from 'prop-types';
import {StyleSheet,Text,TouchableHighlight,View} from "react-native";

import styles from './styles';

const ProfileButton = ({customIcon, profileText,onPress}) => {
    return (
        <TouchableHighlight style={{marginTop:18,alignItems:'center',borderRadius:10}} onPress={onPress}>
            <View  style={styles.textIcon}>
                <View style={styles.cusIcon}>{customIcon}</View>
                <Text style={styles.textButton}>{profileText}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default ProfileButton;