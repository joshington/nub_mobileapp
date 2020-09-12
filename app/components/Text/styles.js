import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    memberText: {
        color: "$memberText",
        fontSize: 22,
        textAlign: "center",
        //paddingTop:10,
        //==marginBottom: think about it.
    },
    smallText: {
        color: "$smallText",
        fontSize: 12,
        textAlign: "center",
    },
    profileButton: {
        //margin:10,
        backgroundColor: "#352BD1",
        paddingVertical: 15,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    profileTe: {
        color: "$memberText",
        fontSize: 21,
        marginLeft: 5,
    },
});
