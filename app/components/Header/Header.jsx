import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>NUP</Text>
            <Image
                resizeMode="contain"
                style={styles.icon}
                // eslint-disable-next-line no-undef
                source={require("./images/gear.png")}
            />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;
