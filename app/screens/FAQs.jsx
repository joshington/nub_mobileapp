import React, { Component } from "react";
import { View } from "react-native";
import Home from "./Home";
class FAQs extends Component {
    static navigationOptions = ({ navigation }) => {
        <Home navigation={navigation} name="FAQs" />;
    };
    render() {
        return <View>frequently asked questions</View>;
    }
}

//export default FAQs = ({navigation}) => <Home navigation={navigation} name="FAQs" />
export default FAQs;
