import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

const LatestNews = (props) => {
    return (
        <View style={styles.text_input}>
            <Text style={styles.text}>Latest News</Text>
            <View style={styles.border} />
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                {...props}
            />
        </View>
    );
};

export default LatestNews;
