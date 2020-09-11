import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableHighlight,Image} from 'react-native';
import NewsHeadlines from './NewsHeadlines';
import ButtonGroup from '../Buttons/ButtonGroup';
import HandleDate from '../Text/HandleDate';

import styles from './styles';
const NewsCard = ({headlines,customImage,onPress}) => {
    //var path= '../../screens/images/';
    //var new_path = path.concat(str);
    //const comp_path = require(new_path);
    const _date= new Date();
    return(
        <View>
            <NewsHeadlines headlines={headlines} />
            <HandleDate day="thursday" date={_date} />
            <View style={styles.separator} />
            <View style={styles.image_text}>
                <View style={styles.image}>{customImage}</View>
                <Text style={styles.text}></Text>
            </View>
            <ButtonGroup buttonText="Read more" onPress={onPress} />
            <View style={styles.separator} />
        </View>
    )
}

NewsCard.propTypes = {
    headlines:PropTypes.string,
    customImage:PropTypes.element,
    onPress:PropTypes.func,

}
export default NewsCard;