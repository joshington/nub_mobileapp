import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import color from "color";

const OpacityWithInput = (props) => {
    const { buttonText, editable = false } = props;
    // eslint-disable-next-line no-unused-vars
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier
    ); //just modifying the color by a certain degree, here by 0.1.
    const containerStyles = [styles.container];
    if (editable === false) {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <TextInput
                style={{ ...styles.input, borderColor: "#FF5722" }}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

OpacityWithInput.propTypes = {
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default OpacityWithInput;
