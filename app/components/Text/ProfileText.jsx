import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

const ProfileText = ({ textProfile }) => {
    return (
        <View style={styles.profileButton}>
            <Text style={styles.profileTe}>{textProfile}</Text>
        </View>
    );
};

ProfileText.propTypes = {
    textProfile: PropTypes.string,
};
export default ProfileText;
