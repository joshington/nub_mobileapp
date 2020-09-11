import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar, StyleSheet} from 'react-native';

export default EStyleSheet.create({
    container: {
        //position: 'absolute',
        left: 0,
        right: 0,
        top:0,
        '@media ios': {
            paddingTop: 20,
        },
        '@media android': {
            paddingTop: StatusBar.currentHeight, //available only on android.
        },
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    icon:{
        alignSelf:'flex-end',
        width: 28,
        //backgroundColor:'#ffffff'
    },
    text:{
        //alignSelf: 'flex-start',
        justifyContent:'center',
        fontSize:22,
        color:'#ffffff',
        fontWeight:'bold',
        marginLeft:20,
    },
    header:{
        marginTop:10,
        alignItems:'center',
        paddingTop:20,
        //backgroundColor:'#dbd3d3',
        flex:1,
        '@media android': {
            paddingTop: StatusBar.currentHeight, //available only on android.
        },
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '#000000',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
});
