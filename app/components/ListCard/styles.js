import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $underlayColor: '$border',
    touchable: {
        height:100,
        marginRight:5,
        marginLeft:5,
    },
    row: {
        marginTop: 3,
        marginLeft:6,
        marginRight:6,
        paddingHorizontal: 14,
        paddingVertical: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$primaryColor',
        borderRadius: 16,
        color:'$memberText',
    },
    text: {
        fontSize: 26,
        color: '$darkText',
        justifyContent:'space-around',
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
});

export default styles;
