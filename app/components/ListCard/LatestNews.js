import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import color from 'color';

import styles from './styles';

const LatestNews = (props) => {
    return (
        <View style={styles.text_input}>
            <Text style={styles.text}>Latest News</Text>
            <View  style={styles.border} />
            <TextInput  style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    )
}

export default LatestNews;