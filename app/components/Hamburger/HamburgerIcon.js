import React, {Component} from 'react';
import {StyleSheet, PLatform, View, TextImage, TouchableOpacity,YellowBox, Dimensions} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Logo from '../components/Logo/Logo';
import {createStackNavigator} from 'react-navigation-stack';


class HamburgerIcon extends Component{
    toggleDrawer = () => {
        console.log(this.props.navigationProps);
        this.props.navigationProps.toggleDrawer();
    }

    render(){
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                <Logo />            

            </TouchableOpacity>
        </View>
    }
}
export default HamburgerIcon;