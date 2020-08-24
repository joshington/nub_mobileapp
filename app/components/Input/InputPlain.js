import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import * as yup from "yup";

import StyledInput from './StyledInput';

const validationSchema = yup.object().shape({
    Username: yup.string().label('Username').email().required(),
    password:yup.string().label('Password').required()
    .min(2, "Seems abit short")
    .max(10, 'we must use shorter passwords'),
});

class InputPlain extends Component{
    render(){
        return(
            <SafeAreaView>
                <Formik
                    initialValues={{Username: '', password: ''}}
                    validationSchema={validationSchema}
                >
                    {formikProps => (
                        <>
                            <StyledInput
                                label="Username"
                                formikProps={formikProps}
                                formikKey="Username"
                                placeholder="Enter Username"
                                placeholderTextColor="#000000"
                                underlineColorAndroid="#000000"
                                autoFocus
                            />
                            <StyledInput
                                label="Contact"
                                formikProps={formikProps}
                                formikKey="Contact"
                                placeholder="Contact  here"
                                placeholderTextColor="#000000"
                                underlineColorAndroid="#000000"
                                autoFocus
                            />
                        </>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default InputPlain;