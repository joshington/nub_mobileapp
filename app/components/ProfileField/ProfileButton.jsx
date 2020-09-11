import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ProfileButton = ({ customIcon, profileText, onPress }) => {
    return (
        <TouchableHighlight
            style={{ marginTop: 18, alignItems: "center", borderRadius: 10 }}
            onPress={onPress}
        >
            <View style={styles.textIcon}>
                <View style={styles.cusIcon}>{customIcon}</View>
                <Text style={styles.textButton}>{profileText}</Text>
            </View>
        </TouchableHighlight>
    );
};

ProfileButton.propTypes = {
    customIcon: PropTypes.string,
    profileText: PropTypes.string,
    onPress: PropTypes.func,
};

export default ProfileButton;
