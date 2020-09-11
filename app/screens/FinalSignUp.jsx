import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo/Logo";
import ModalSign from "../components/Modal/ModalSign";

class SignUp extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    getHome = () => {
        this.props.navigation.navigate("Home");
    };

    render() {
        return (
            <>
                <Logo addStyles={true} />
                <ModalSign />
            </>
        );
    }
}
export default SignUp;
