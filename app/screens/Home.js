import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,StatusBar,ScrollView,Linking} from 'react-native';
import Logo from '../components/Logo/Logo';
import ListCard from '../components/ListCard/ListCard';
//import {Card} from 'react-native-elements';
//import Cards from '../components/Cards/Card'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import connectAlert from  '../components/Alert/connectAlert';
import ListContainer from  '../components/ListContainer/ListContainer';


class Home extends Component{
    static propTypes = {
        alertWithType: PropTypes.func,
    }
    //====writing logic for the components if list card are more than one push the third  
    handleGetNews = () => {
        //linking to the website for now
        Linking.openURL('https://nupuganda.org').catch(() => 
            this.props.alertWithType('error', 'Sorry', "please connect to the internet")
        )
    }
    getPartyEvents = () => {
        console.log("calling the events now");
    }
    render(){
        let count = <ListCard />
        return(
            <>  
                <View style={{paddingHorizontal:30,paddingTop:80,paddingBottom:0,alignSelf:'center',marginBottom:18}}>
                    <Logo addStyles={true} />
                </View>
                <ListContainer>
                    {/*target is to make the divs two in a row.*/}
                    <ListCard 
                            text="News"
                            onPress={this.handleGetNews}
                            customIcon={
                                <Feather name="globe" size={30} color="black" />
                            }
                    />
                    <ListCard 
                            text="Events"
                            onPress={this.getPartyEvents}
                            customIcon={
                                <MaterialIcons name="event" size={40} color="black" />
                            }
                    />
                {/*
                    <ListCard 
                        text="Membership"
                        customIcon={
                            <MaterialIcons name="card-membership" size={40} color="black" />
                        }
                />
                    <ListCard 
                        text="Donations"
                        customIcon={
                            <FontAwesome5 name="donate" size={40} color="black" />
                        }
                />
                    */}
                
                </ListContainer>
            </>
        )
    }
}


export default  connectAlert(Home);