/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Image, StatusBar } from "react-native";
import NewsCard from "../components/ListCard/NewsCard";
import OpacityWithInput from "../components/NewsUpdate/OpacityWithInput";

const headlines = {
    headlines: {
        first: "Nup launches nationwide fundraising drive",
        second:
            "Mao warns DP leaders against working with MPs who defected to NUP",
        third:
            "Tear gas, bullets rock Kamwokya as NUP, NRM struggle to dominate ghetto",
    },
};

class News extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    getMain = () => {
        this.props.navigation.navigate("MainNews");
    };

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <OpacityWithInput
                    buttonText="News"
                    style={{ flex: 1, borderRadius: 20 }}
                />
                <NewsCard
                    headlines={headlines.headlines.first}
                    customImage={
                        <Image
                            resizeMode="contain"
                            source={require("./images/news_1.jpg")}
                        />
                    }
                    onPress={this.getMain}
                />
                <NewsCard
                    headlines={headlines.headlines.second}
                    customImage={
                        <Image
                            resizeMode="contain"
                            source={require("./images/news_2.jpg")}
                        />
                    }
                    onPress={this.getMain}
                />
                <NewsCard
                    headlines={headlines.headlines.third}
                    customImage={
                        <Image
                            resizeMode="contain"
                            source={require("./images/nup_5.jpg")}
                        />
                    }
                    onPress={this.getMain}
                />
            </ScrollView>
        );
    }
}

export default News;
