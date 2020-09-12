import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";
import ProfileLogo from "../components/Logo/ProfileLogo";
import ProfileText from "../components/Text/ProfileText";
import ProfileContainer from "../components/Container/ProfileContainer";
import ProfileField from "../components/ProfileField/ProfileField";
import { AntDesign } from "@expo/vector-icons";
import ProfileButton from "../components/ProfileField/ProfileButton";

class Membership extends Component {
    static navigationOptions = {
        title: "My Account",
        headerStyle: { backgroundColor: "#352BD1" },
        headerTitleStyle: { color: "#FFFFFF" },
    };
    static propTypes = {
        navigation: PropTypes.object,
    };

    constructor() {
        super();
        this.state = {
            name: "Lutalo joseph Bbosa",
            contact: "0706626855",
            District: "Wakiso",
            Village: "Nyanama",
        };
    }

    getToSettings = () => {
        this.props.navigation.navigate("Settings");
    };

    getDonations = () => {
        this.props.navigation.navigate("DonateScreen");
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="default" translucent={false} />
                <ProfileLogo />
                <ProfileText textProfile="MY ACCOUNT" />
                <ProfileContainer>
                    <ProfileField fieldValue={this.state.name} />
                    <ProfileField fieldValue={this.state.contact} />
                    <ProfileField fieldValue={this.state.District} />
                    <ProfileField fieldValue={this.state.Village} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <ProfileButton
                            customIcon={
                                <AntDesign
                                    name="edit"
                                    size={30}
                                    color="black"
                                />
                            }
                            profileText="EditProfile"
                            onPress={this.getToSettings}
                        />
                        <ProfileButton
                            customIcon={
                                <AntDesign
                                    name="hearto"
                                    size={24}
                                    color="black"
                                />
                            }
                            profileText="Donate"
                            onPress={this.getDonations}
                        />
                    </View>
                </ProfileContainer>
            </View>
        );
    }
}

export default Membership;
