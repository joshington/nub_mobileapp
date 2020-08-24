import EStyleSheet from 'react-native-extended-stylesheet';

const BUTTON_HEIGHT = 48;

export default EStyleSheet.create({
    container: {
        width: '90%',
        borderRadius:12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 2,
        marginVertical:11,
    },
    buttonContainer: {
        height:BUTTON_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:28,
        paddingHorizontal: 80,
        backgroundColor: '#D1482B',
       

    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$memberText',
    }
})