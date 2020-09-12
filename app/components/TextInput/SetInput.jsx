import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

const SetInput = ({ onPress }) => {
    return <TextInput onChangeText={onPress} />;
};

SetInput.propTypes = {
    onPress: PropTypes.func,
};

export default SetInput;
