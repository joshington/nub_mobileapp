import React, { Component } from "react";
import { View } from "react-native";
import Home from "./Home";

class SignOutScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        <Home navigation={navigation} name="SignOutScreen" />;
    };
    render() {
        return <View>Payments here</View>;
    }
}

export default SignOutScreen;
