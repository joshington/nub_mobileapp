import React from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import styles from './styles';

const NewsHeadlines = ({headlines}) => (
    <View>
        <Text style={styles.headText}>{headlines}</Text>
    </View>
)
NewsHeadlines.propTypes = {
    headlines:PropTypes.string,
}

export default NewsHeadlines;