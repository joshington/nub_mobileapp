import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

const CardLogo = ({ source }) => {
    return (
        <view>
            <Image resizeMode="cover" source={source} />
        </view>
    );
};

CardLogo.propTypes = { source: PropTypes.string };

export default CardLogo;
