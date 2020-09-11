import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

//import Rave from 'react-native-rave';
import PayWithFlutterwave from "flutterwave-react-native";

class DonateScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        handleOnComplete: PropTypes.func,
        transactionReference: PropTypes.string,
    };
    render() {
        const { handleOnComplete, transactionReference } = this.props;

        return (
            <View>
                <PayWithFlutterwave
                    onComplete={handleOnComplete}
                    options={{
                        tx_ref: transactionReference,
                        authorization:
                            "[FLWSECK_TEST-e0cbc06d58428b734f5caa144be6cbb7-X]",
                        customer: {
                            email: "bbosalj@gmail.com",
                        },
                        amount: 50000,
                        currency: "UGX",
                        payment_options: "card,mobilemoneyuganda",
                    }}
                />
            </View>
        );
    }
}
export default DonateScreen;
