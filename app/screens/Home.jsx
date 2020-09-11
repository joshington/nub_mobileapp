import React, { Component } from "react";
import PropTypes from "prop-types";
import PayWithFlutterwave from "flutterwave-react-native";
import Logo from "../components/Logo/Logo";
import Card from "../components/ListCard/Card";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import connectAlert from "../components/Alert/connectAlert";
import CardContainer from "../components/ListContainer/CardContainer";
//import DonateScreen from './DonateScreen';
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({});

class Home extends Component {
    static propTypes = {
        alertWithType: PropTypes.func,
        navigation: PropTypes.object,
    };

    //====writing logic for the components if list card are more than one push the third
    handleGetNews = () => {
        //linking to the website for now
        //Linking.openURL('https://nupuganda.org').catch(() =>
        //    this.props.alertWithType('error', 'Sorry', "please connect to the internet")
        //)
        this.props.navigation.navigate("News");
    };

    getPartyEvents = () => {
        this.props.navigation.navigate("Events");
    };

    getMyAccount = () => {
        this.props.navigation.navigate("Membership");
    };

    getSettings = () => {
        this.props.navigation.navigate("Settings");
    };

    getAuth = () => {
        this.props.navigation.navigate("Login");
    };

    getDonations = () => {
        return (
            <PayWithFlutterwave
                onComplete={console.log("done payments")}
                onRedirect={() => this.props.navigation.goBack()}
                options={{
                    tx_ref: "5799821",
                    authorization:
                        "[FLWSECK_TEST-e0cbc06d58428b734f5caa144be6cbb7-X]",
                    customer: {
                        email: "bbosalj@gmail.com",
                    },
                    amount: 50000,
                    currency: "NGN",
                    payment_options: "card",
                }}
                customButton={(props) => (
                    <TouchableOpacity
                        style={styles.paymentButton}
                        onPress={this.getDonations}
                        isBusy={props.isInitializing}
                        disabled={props.disabled}
                    >
                        <Text style={styles.paymentButtonText}>Pay $500</Text>
                    </TouchableOpacity>
                )}
            />
        );
    };

    render() {
        return (
            <>
                {/*
                <View style={{paddingHorizontal:30,paddingTop:80,paddingBottom:0,
                    alignItems:'center',marginBottom:18}}>
                    <Logo addStyles={true} />
                </View> 
                */}
                <Logo addStyles={true} />
                <CardContainer>
                    {/*target is to make the divs two in a row.*/}
                    <Card
                        text="News"
                        onPress={this.handleGetNews}
                        colorChange={false}
                        customIcon={
                            <Feather name="globe" size={72} color="#FFFFFF" />
                        }
                        alternate={false}
                    />
                    <Card
                        text="Events"
                        onPress={this.getPartyEvents}
                        colorChange={true}
                        customIcon={
                            <MaterialIcons
                                name="event"
                                size={72}
                                color="#FFFFFF"
                            />
                        }
                        alternate={false}
                    />
                    <Card
                        text="Donate"
                        onPress={this.getDonations}
                        colorChange={false}
                        customIcon={
                            <FontAwesome5
                                name="donate"
                                size={72}
                                color="#FFFFFF"
                            />
                        }
                        alternate={true}
                        altercolm={true}
                    />
                    <Card
                        text="My Account"
                        onPress={this.getMyAccount}
                        colorChange={true}
                        customIcon={
                            <MaterialCommunityIcons
                                name="account-circle"
                                size={72}
                                color="#FFFFFF"
                            />
                        }
                        alternate={true}
                    />
                    <Card
                        text="Settings"
                        onPress={this.getSettings}
                        colorChange={false}
                        customIcon={
                            <MaterialIcons
                                name="settings"
                                size={72}
                                color="#FFFFFF"
                            />
                        }
                    />
                    <Card
                        text="Subscribe"
                        onPress={this.getAuth}
                        colorChange={true}
                        customIcon={
                            <MaterialCommunityIcons
                                name="cursor-pointer"
                                size={72}
                                color="#FFFFFF"
                            />
                        }
                    />
                    {/*
                    <ListCard 
                        text="Donations"
                        customIcon={
                            <FontAwesome5 name="donate" size={40} color="black" />
                        }
                />
                    */}

                    {/*<OpacityWithInput buttonText="News" style={{flex:1}} /> */}
                </CardContainer>
            </>
        );
    }
}

export default connectAlert(Home);
