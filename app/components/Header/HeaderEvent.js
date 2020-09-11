import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableHighlight, Image,currentMonth} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const HeaderEvent = ({currentMonth,onPress}) => (
    <View style={{...styles.header, paddingVertical:20,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{...styles.text,marginBottom:8,marginLeft:70, fontWeight:'bold'}}>{currentMonth}</Text>
        <TouchableHighlight style={{alignSelf:'center',marginLeft:50}} onPress={onPress}>
            <Ionicons name="md-arrow-forward" size={24} color="#ffffff" />
        </TouchableHighlight>
    </View>
)

export default HeaderEvent;