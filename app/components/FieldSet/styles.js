import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor:  '$primaryBlue',
        marginTop: 12,
        padding: 7,
    },
    text: {
        fontSize: 25,
        marginLeft: 5,
    },
    textEdit: {
        fontSize: 25,
        marginRight: 20,
        color: "$primaryColor",
    },
    button: {
        //backgroundColor:'$primaryBlue',
        //alignSelf:'flex-end',
        marginLeft: 150,
        marginRight: 2,
    },
});
