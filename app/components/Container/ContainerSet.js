import React  from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';

const ContainerSet = ({children}) => (
    <View style={styles.settings}>
        {children}
    </View>
)

ContainerSet.propTypes = {
    children:PropTypes.any,
}

export default ContainerSet;