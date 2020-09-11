import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import AlertProvider from "./components/Alert/AlertProvider";

EStyleSheet.build({
    $primaryColor: "#FF033E",
    $primaryGrey: "#dbd3d3",
    $primaryBlue: "#4F6D7A",
    $primaryBlueHome: "#6F8D8A",
    $memberText: "#FFFFFF",
    $border: "#343434",
    $inputText: "#4F6D7A",
    $inputNews: "#797979",
    $darkText: "#343434",
    $lightGray: "#F0F0F0",
    $smallText: "#E0F0F0",
});

// eslint-disable-next-line react/display-name
export default () => (
    <AlertProvider>
        <Navigator />
    </AlertProvider>
);
//export default () => <Events />;
//export default () => <News />;
//export default () => <Membership />
