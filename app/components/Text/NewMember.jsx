import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

import styles from "./styles";

const NewMember = ({ text }) => {
    return <Text style={styles.memberText}>{text}</Text>;
};

NewMember.propTypes = {
    text: PropTypes.string,
};

export default NewMember;
