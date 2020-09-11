import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import styles from './styles';

const ProfileField = ({fieldValue}) => {
    return(
        <View>
            <View>
                {/*<View style={styles.cusIcon}>{customIcon}</View> */}
                <Text style={styles.text}>{fieldValue}</Text>
            </View>
            
            <View style={styles.separator} />
        </View>
    )
}

ProfileField.propTypes = {
    fieldValue:PropTypes.string,
}
export default ProfileField;