import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import moment from 'moment';

import styles from './styles';

const HandleDate = ({date}) => (
    <Text style={styles.smallText}>
        {moment(date).format('MMMM D, YYYY')}
    </Text>
);

HandleDate.propTypes = {
    date: PropTypes.object,
}

export default HandleDate;
