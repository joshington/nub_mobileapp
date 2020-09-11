/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { createAppContainer } from "react-navigation"; //remember its different
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import FAQs from "../screens/FAQs";
import SignOutScreen from "../screens/SignOutScreen";
import SideBar from "../components/SideBar/SideBar";
import React from "react";

const DrawerNavigator = createDrawerNavigator(
    {
        FAQs: {
            screen: FAQs,
            navigationOptions: {
                //title: "FAQs",
                drawerLabel: "FAQs",
                drawerIcon: ({ tintColor }) => (
                    <Feather
                        name="message-square"
                        size={16}
                        color={tintColor}
                    />
                ),
            },
        },
        SignOutScreen: {
            screen: SignOutScreen,
            navigationOptions: {
                //title: "SignOut",
                drawerLabel: "SignOut",
                drawerIcon: ({ tintColor }) => (
                    <Feather
                        name="message-square"
                        size={16}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        contentComponent: (props) => <SideBar {...props} />,
        drawerWidth: Dimensions.get("window").width * 0.85,
        hideStatusBar: true,
        contentOptions: {
            activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
            activeTintColor: "#53115B",
            itemsContainerStyle: {
                marginTop: 16,
                marginHprizontal: 8,
            },
            itemStyle: {
                borderRadius: 4,
            },
        },
    }
);

const Drawer = createAppContainer(DrawerNavigator);
export default Drawer;
