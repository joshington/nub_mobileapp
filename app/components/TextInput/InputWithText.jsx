import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

const InputWithText = (props) => {
    const { onPress, buttonText } = props;
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};
InputWithText.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
};
export default InputWithText;
