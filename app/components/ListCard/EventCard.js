import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const EventCard = ({event,date}) => {
  return(
    <>
        <TouchableHighlight  style={styles.eventCard}>
            <View>
                <Text style={styles.date}>{date}</Text>
                <View style={styles.separatorDate} />
                <Text style={{...styles.text,marginLeft:10,marginBottom:15}}>{event}</Text> 
            </View>
        </TouchableHighlight>
    </>
  )
}

EventCard.propTypes = {
    event:PropTypes.string,
    date:PropTypes.number,
}
export default EventCard