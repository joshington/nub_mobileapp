import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;


export default EStyleSheet.create({
    $buttonBackgroundColorBase: '$memberText',
    $buttonBackgroundColorModifier: 0.1,
    
    container: {
        //backgroundColor: '$memberText',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:11,
        //flex:1,
        marginBottom:5,
    },
    containerDisabled: {
        backgroundColor: '$lightGray',
    },
    buttonContainer: {
        marginLeft:15,
        borderRadius:3,
        height: INPUT_HEIGHT,
        paddingHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000099',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,

    },
    buttonText: {

        fontWeight: '600',
        fontSize: 25,
        borderRadius:15,
        color: '$primaryBlue',
    },
    input:{
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 50,
        color: '$inputNews',
        //SSborderBottomColor: '#000000',
        borderColor:'#FF5722',
        //borderLeftWidth: 1,
        borderWidth: 1,
        borderRadius:3,
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
});