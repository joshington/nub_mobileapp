import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    logo: {
        justifyContent: "center",
        paddingTop: 10,
        marginBottom: 3,
        marginRight: 5,
        width: "50%",
        height: "15%",
        alignItems: "center",
    },
    cardLogo: {
        paddingTop: 20,
        alignItems: "center",
        marginLeft: 100,
        justifyContent: "center",
        paddingRight: 80,
    },
    profileLogo: {
        justifyContent: "center",
        margin: 20,
        marginBottom: 10,
        alignItems: "center",
    },
    memberText: {
        color: "$memberText",
        fontSize: 15,
        textAlign: "center",
        paddingTop: 10,
    },
    settings: {},
});
