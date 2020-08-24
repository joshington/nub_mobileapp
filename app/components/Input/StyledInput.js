import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from "yup";

const StyledInput = ({label,formikProps, formikKey, ...rest}) => (

    <View style={{marginHorizontal:15, marginVertical:5}}>
        {/*<Text>{label}</Text> */}
        <TextInput  
        //placeholder="bbosalj@gmail.com"
            style={{padding:5,marginBottom:1, paddingHorizontal: 70}} 
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}  
            //autoFocus
            {...rest}
        />
        <Text style={{color: 'red'}}>{formikProps.touched.formikKey && formikProps.errors.formikKey}</Text>

    </View>

)

export default StyledInput;
