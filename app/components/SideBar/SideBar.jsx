import React from "react";
import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import styles from "../Modal/styles";

const Sidebar = (props) => (
    <ScrollView>
        <ImageBackground
            // eslint-disable-next-line no-undef
            source={require("../../../assets/imagebg.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image
                // eslint-disable-next-line no-undef
                source={require("../../../assets/profile.png")}
                style={styles.profile}
            />
            <Text style={styles.name}>Lutalo Bbosa</Text>
            {/* <Ionicons name="md-people" size={16} color="rgba(255, 255,255,0.8)" /> */}
        </ImageBackground>
        <View style={styles.container}>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
