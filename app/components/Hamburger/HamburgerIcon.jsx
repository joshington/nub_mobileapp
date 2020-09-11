import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Logo from "../components/Logo/Logo";
import PropTypes from "prop-types";

class HamburgerIcon extends Component {
    static propTypes = {
        navigationProps: {
            toggleDrawer: PropTypes.func,
        },
    };

    toggleDrawer = () => {
        console.log(this.props.navigationProps);
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Logo />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HamburgerIcon;
