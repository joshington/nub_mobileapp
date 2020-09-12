import React, { Component } from "react";
import {
    StatusBar,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
} from "react-native";
import ContainerSet from "../components/Container/ContainerSet";
import HeaderSet from "../components/Header/HeaderSet";
import FieldSet from "../components/FieldSet/FieldSet";

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            name: "lutalo",
            contact: "0706626855",
            District: "Wakiso",
            Village: "Nyanama",
            edit: false,
        };
    }
    editPress = () => {
        this.setState({
            name: "",
            edit: true,
        });
        return <TextInput />;
    };
    render() {
        return (
            <>
                <ContainerSet>
                    <StatusBar barStyle="default" translucent={false} />
                    <HeaderSet />
                    <View
                        style={{
                            backgroundColor: "#252527",
                            height: StyleSheet.hairlineWidth,
                        }}
                    />
                    <View style={{ backgroundColor: "#CFCFD8" }}>
                        <FieldSet onPress={this.editPress} text="Name" />
                        <TextInput
                            style={{
                                marginTop: 20,
                                margin: 10,
                                fontSize: 20,
                                color: "#2E2EE7",
                            }}
                            defaultValue={this.state.name}
                            maxLength={15}
                        />
                        <View
                            style={{
                                backgroundColor: "#252527",
                                height: StyleSheet.hairlineWidth,
                            }}
                        />
                        <FieldSet onPress={this.editPress} text="Contact" />
                        <TextInput
                            defaultValue={this.state.contact}
                            maxLength={15}
                            style={{
                                marginTop: 20,
                                margin: 10,
                                fontSize: 20,
                                color: "#2E2EE7",
                            }}
                        />
                        <View
                            style={{
                                backgroundColor: "#252527",
                                height: StyleSheet.hairlineWidth,
                            }}
                        />
                        <FieldSet onPress={this.editPress} text="District" />
                        <TextInput
                            style={{
                                marginTop: 20,
                                margin: 10,
                                fontSize: 20,
                                color: "#2E2EE7",
                            }}
                            defaultValue={this.state.District}
                            maxLength={15}
                        />
                        <View
                            style={{
                                backgroundColor: "#252527",
                                height: StyleSheet.hairlineWidth,
                            }}
                        />
                        <FieldSet onPress={this.editPress} text="Village" />
                        <TextInput
                            style={{
                                marginTop: 20,
                                margin: 10,
                                fontSize: 20,
                                color: "#2E2EE7",
                            }}
                            defaultValue={this.state.Village}
                            maxLength={15}
                        />
                    </View>
                </ContainerSet>
                <TouchableHighlight
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 12,
                        backgroundColor: "#1C1C51",
                        borderRadius: 21,
                        justifyContent: "center",
                        marginLeft: 8,
                        marginRight: 8,
                        marginTop: 4,
                    }}
                >
                    <Text
                        style={{
                            alignItems: "center",
                            fontSize: 20,
                            marginLeft: 20,
                            alignSelf: "center",
                            color: "#ffffff",
                        }}
                    >
                        Save Changes
                    </Text>
                </TouchableHighlight>
            </>
        );
    }
}

export default Settings;
