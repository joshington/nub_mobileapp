import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from  './screens/Home'
import SignUp from './screens/SignUp';




EStyleSheet.build({
    $primaryColor: '#C0242A',
    $primaryGrey: '#dbd3d3',
    $primaryBlue: '#4F6D7A',
    $memberText: '#FFFFFF',
    $border: '#343434',
    $inputText: '#4F6D7A',
    $darkText: '#343434',
});

export default () => <Home />;