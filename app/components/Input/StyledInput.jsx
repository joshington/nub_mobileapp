import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";

const StyledInput = ({ formikProps, formikKey, ...rest }) => (
    <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
        {/*<Text>{label}</Text> */}
        <TextInput
            //placeholder="bbosalj@gmail.com"
            style={{ padding: 5, marginBottom: 1, paddingHorizontal: 70 }}
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}
            //autoFocus
            {...rest}
        />
        <Text style={{ color: "red" }}>
            {formikProps.touched.formikKey && formikProps.errors.formikKey}
        </Text>
    </View>
);

StyledInput.propTypes = {
    label: PropTypes.string,
    formikProps: {
        errors: { formikKey: PropTypes.string },
    },
    formikKey: PropTypes.string,
};

export default StyledInput;
