import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const ProfileLogo = () => {
    return (
        <View style={styles.profileLogo}>
            <Image
                resizeMode="contain"
                // eslint-disable-next-line no-undef
                source={require("./images/profile_re.png")}
            />
        </View>
    );
};

ProfileLogo.propTypes = {};
export default ProfileLogo;
