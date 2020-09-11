import React from 'react';
import PropTypes from 'prop-types'
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const Card = ({onPress,text, customIcon=null, colorChange=false, alternate=false, altercolm=false}) => {
  const changedStyle = [styles.touchable]
  if(colorChange === true && alternate === false){
    changedStyle.push(styles.changedStyle)
  }
  else if(altercolm === true) changedStyle.push(styles.colmStyle)
  else{
    changedStyle.push(styles.alternateStyle)
  }
  return(
    <>
      <TouchableHighlight onPress={onPress} style={changedStyle}>
          <View style={styles.touchIcon}>
            {customIcon}
            <Text style={{...styles.text,color:'#ffffff'}}>{text}</Text> 
          </View>
      </TouchableHighlight>
    </>
  )
}

Card.propTypes = {
    text: PropTypes.string,
    colorChange:PropTypes.bool,
    onPress:PropTypes.func,
    customIcon:PropTypes.element,
    alternate:PropTypes.bool,
    altercolm:PropTypes.bool,
}
export default Card;