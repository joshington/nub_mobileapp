import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import styles from "./styles";

const Logo = ({ addStyles }) => {
    const totalStyles = [styles.logo];
    if (addStyles === true) {
        totalStyles.push(styles.cardLogo);
    }
    return (
        <View style={totalStyles}>
            <Image
                resizeMode="contain"
                // eslint-disable-next-line no-undef
                source={require("./images/nup_edited.png")}
            />
        </View>
    );
};

Logo.propTypes = {
    addStyles: PropTypes.bool,
};
export default Logo;
