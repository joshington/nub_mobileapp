import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $underlayColor: '$border',
    touchable: {
        height:120,
        width:140,
        margin:8,
        borderRadius:20,
        backgroundColor:'$primaryColor',
        opacity: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 9,
    },
    eventCard: {
        height:102,
        width:93,
        margin:6,
        borderRadius:15,
        backgroundColor:'#900C3F',
        opacity: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.94,
        elevation: 7
    },
    date:{
        paddingTop:15,
        fontSize:27,
        alignSelf:'center',
        color:'#ffffff'
    },
    event:{
        fontSize:15,
        alignSelf:'center',
        marginLeft:3,
        
    },
    changedStyle:{
        backgroundColor:'#2f4c58',//so this overwrites the other
    },
    alternateStyle:{
        backgroundColor:'$primaryColor',
    },
    colmStyle:{
        backgroundColor:'#2f4c58',
    },
    touchIcon:{
        alignItems:'center',
        paddingTop:5,
    },
    text: {
        fontSize: 30,
        color:'#ffffff',
        fontWeight:'bold',
        marginLeft:15,
       
    },
    headText:{
        fontSize:22,
    },
    separator: {
        flex:1,
        backgroundColor: '$primaryGrey',
        //width:90,
        height: StyleSheet.hairlineWidth,
    },
    separatorDate:{
        backgroundColor: '#000000',
        width:90,
        height: StyleSheet.hairlineWidth,
    },
    image:{
        resizeMode:'stretch',
        width:100,
    },
    input:{
        backgroundColor:'$primaryGrey',
    },
    text_input:{
        borderRadius:25,
        paddingHorizontal:50,
        paddingTop:10,
    },
    text:{
        fontSize:20,
        //backgroundColor:'$primaryColor',
    }

});

export default styles;
