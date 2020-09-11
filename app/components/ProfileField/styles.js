import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: "$border",
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 11,
    },
    text: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "bold",
        margin: 12,
        marginLeft: 27,
    },
    textButton: {
        fontSize: 20,
        color: "$primaryColor",
        fontWeight: "bold",
        margin: 12,
        marginLeft: 5,
    },
    separator: {
        backgroundColor: "#252527",
        //width:90,
        height: StyleSheet.hairlineWidth,
    },
    textIcon: {
        flexDirection: "row",
    },
    cusIcon: {
        marginTop: 11,
        marginLeft: 12,
    },
});
