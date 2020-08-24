import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    logo: {
        justifyContent:'center',
        paddingTop:10,
        marginBottom:3,
        marginRight:5,
        width: '50%',
        height:'15%',
        alignItems:'center',
    },
    cardLogo:{
        paddingTop:60,
        alignItems:'center',
        marginLeft:40,
        justifyContent:'center',
    
    },
    memberText: {
        color: '$memberText',
        fontSize: 15,
        textAlign: 'center',
        paddingTop:10,
    }
})