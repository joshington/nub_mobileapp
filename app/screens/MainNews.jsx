import React, { Component } from "react";
import { ScrollView, Image, StatusBar } from "react-native";
import OpacityWithInput from "../components/NewsUpdate/OpacityWithInput";
import NewsCard from "../components/ListCard/NewsCard";
import NewsBody from "../components/ListCard/NewsBody";

const headlines = {
    headlines: {
        first: "Nup launches nationwide fundraising drive",
        second:
            "Mao warns DP leaders against working with MPs who defected to NUP",
        third:
            "Tear gas, bullets rock Kamwokya as NUP, NRM struggle to dominate ghetto",
    },
};

class MainNews extends Component {
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
                            // eslint-disable-next-line no-undef
                            source={require("./images/news_1.jpg")}
                        />
                    }
                />
                <NewsBody />
            </ScrollView>
        );
    }
}
export default MainNews;
