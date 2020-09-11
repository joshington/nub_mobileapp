import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    containerList: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 20,
        backgroundColor: "$primaryBlueHome",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    eventContainer: {
        backgroundColor: "$primaryBlue",
    },
});
