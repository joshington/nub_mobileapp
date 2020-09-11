import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const ProfileContainer = ({ children }) => (
    <View style={styles.profile}>{children}</View>
);

ProfileContainer.propTypes = {
    children: PropTypes.any,
};
export default ProfileContainer;
