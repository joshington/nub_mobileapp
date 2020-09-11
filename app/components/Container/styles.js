import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:  '$primaryBlue',
    },
    settings:{
        backgroundColor:'$primaryBlue',
        paddingTop:3,
    },
    profile:{
        backgroundColor:'#D0D0D1',
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        height:'50%',

    }
})