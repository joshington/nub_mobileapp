import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 30;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    container: {
        //backgroundColor: '$primaryColor',
        width: "90%",
        height: INPUT_HEIGHT,
        //borderRadius: BORDER_RADIUS,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 11,
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "$primaryColor",
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 20,
        paddingHorizontal: 16,
        color: "$memberText",
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: "$memberText",
        marginTop: 2,
        marginBottom: 8,
        paddingLeft: 40,
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: "$border",
    },
});
