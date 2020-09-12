import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

const HeaderSet = ({ onPress }) => (
    <View
        style={{
            ...styles.container,
            flexDirection: "row",
            justifyContent: "space-between",
        }}
    >
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                resizeMode="contain"
                style={styles.icon}
                // eslint-disable-next-line no-undef
                source={require("./images/gear.png")}
            />
        </TouchableOpacity>
    </View>
);

HeaderSet.propTypes = {
    onPress: PropTypes.func,
};

export default HeaderSet;
