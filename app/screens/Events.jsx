import React, { Component } from "react";
import { StatusBar } from "react-native";
import EvtCardContainer from "../components/ListContainer/EvtCardContainer";
import EventCard from "../components/ListCard/EventCard";
import HeaderEvent from "../components/Header/HeaderEvent";
import CardContainer from "../components/ListContainer/CardContainer";
//import EventCard from '../components/ListCard/EventCard';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let d = new Date();
let monthPresent = months[d.getMonth()];

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: monthPresent,
        };
        this.getNextMonth = this.getNextMonth.bind(this);
    }
    getNextMonth = () => {
        let nextMonth = months[months.indexOf(monthPresent) + 1];
        this.setState = {
            currentMonth: nextMonth,
        };
    };
    render() {
        return (
            <>
                <EvtCardContainer>
                    <StatusBar barStyle="default" translucent={false} />
                    <HeaderEvent
                        currentMonth={this.state.currentMonth}
                        onPress={this.getNextMonth}
                    />
                    <CardContainer>
                        {/*target is to make the divs two in a row.*/}
                        <EventCard date={12} event="Labour day" />
                        <EventCard date={20} event="Heroes day" />
                        <EventCard date={30} event="Election day" />
                        <EventCard date={5} event="Anniversary" />
                        <EventCard date={10} event="Registration" />
                        <EventCard date={21} event="Voters" />
                    </CardContainer>
                </EvtCardContainer>
            </>
        );
    }
}
export default Events;
