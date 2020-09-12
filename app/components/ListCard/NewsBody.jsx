import React from "react";
import { View, Text } from "react-native";

const body1 =
    " There were running battles between security and warring supporters of the ruling national resistance movement-NRM and National Unity Platform";

const newsbody = {
    body: {
        body1: body1,
    },
};

const NewsBody = () => {
    <View>
        <Text>{newsbody.body.body1}</Text>
    </View>;
};

export default NewsBody;
