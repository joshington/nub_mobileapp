import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import styles from "./styles";

class ListItem extends Component {
    state = {
        initial: "hey",
        textValue: "bosa",
    };

    static propTypes = {
        label: PropTypes.string,
    };

    render() {
        const { label } = this.props;

        return (
            <View style={styles.labelContainer}>
                <View style={styles.row}>
                    <Text>{label}</Text>
                    <TouchableHighlight>
                        <Text>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default ListItem;
