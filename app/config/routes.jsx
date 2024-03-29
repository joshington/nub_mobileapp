/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; //remember its different
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import DonateScreen from "../screens/DonateScreen";
import FAQs from "../screens/FAQs";
import SignOutScreen from "../screens/SignOutScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUpTrue";
import Membership from "../screens/Membership";
import Home from "../screens/Home";
import Events from "../screens/Events";
import Settings from "../screens/Settings";
import News from "../screens/News";
//import Drawer from './drawerRoutes';
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

// eslint-disable-next-line no-unused-vars
const MembershipStack = createStackNavigator({
    FAQs: {
        screen: FAQs,
        navigationOptions: () => ({
            headerTitle: "FAQs",
        }),
    },
    SignOutScreen: () => ({
        screen: SignOutScreen,
        navigationOptions: {
            headerTitle: "SignOut",
        },
    }),
});

const HomeStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: () => null,
                //tabBarVisible:false,
            },
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                headerTitle: "Register",
            },
        },
    },
    {
        headerMode: "screen", //means the navigation bar comes and goes with the screen.
    }
);

//we want to hide the bottom bar when Login and Signup is rendering
{
    /*HomeStack.navigationOptions = ({navigation}) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === " SignUp" || route.routeName === "Login") {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
    }
    return {
        tabBarVisible
    };
}
*/
}

const HomeAloneStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Membership: {
        screen: Membership,
        navigationOptions: {
            header: () => null,
        },
    },
    Events: {
        screen: Events,
        navigationOptions: {
            header: () => null,
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerTitle: "Settings",
        },
    },
    Donate: {
        screen: DonateScreen,
        navigationOptions: {
            headerTitle: "Donate",
        },
    },
    News: {
        screen: News,
        navigationOptions: {
            headerTitle: "News Updates",
        },
    },
});

// eslint-disable-next-line no-unused-vars
const NavigationStack = createStackNavigator(
    {
        Login: {
            screen: HomeStack,
            navigationOptions: {
                header: () => null,
            },
        },
        Home: {
            //screen:HomeAloneStack,
            screen: Home,
        },
    },
    {
        mode: "modal", //doing this since i want my screen to pop from bottom to the top.
        //make suire the header is proper
        headerMode: "none", //since we dont want the navigator to render the header bar
    }
);

const tabBarIcon = (name) => ({ tintColor }) => (
    <View>
        <Ionicons style={[{ color: tintColor }]} name={name} size={25} />
    </View>
);

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeAloneStack,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-home"),
            },
        },
        Account: {
            screen: Membership,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-person"),
                activeColor: "#ffffff",
                inactiveColor: "#bda1f7",
                barStyle: { backgroundColor: "#2f4c58" },
            },
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-settings"),
            },
        },
        Subscribe: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <EvilIcons
                            style={[{ color: tintColor }]}
                            name="pointer"
                            size={30}
                        />
                    </View>
                ),
                activeColor: "#ffffff",
                inactiveColor: "#bda1f7",
                barStyle: { backgroundColor: "#2f4c58" },
                tabBarVisible: false,
            },
        },
    },
    {
        initialRouteName: "Home",
        activeColor: "#ffffff",
        inactiveColor: "#bda1f7",
        barStyle: { backgroundColor: "#352BD1" },
    }
);

const Navigator = createAppContainer(TabNavigator);
export default Navigator;
