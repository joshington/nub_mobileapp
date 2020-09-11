import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from  './screens/Home'
import SignUp from './screens/Login';
import ModalScreen from './screens/ModalScreen';
import FinalModal from './screens/FinalSignUp';
import Events from  './screens/Events';
import Navigator from './config/routes';
import AlertProvider from './components/Alert/AlertProvider';
import Settings from './screens/Settings';
import News from './screens/News';
import DrawerAll from './config/routes';
import Membership from './screens/Membership';

EStyleSheet.build({
    $primaryColor: '#FF033E',
    $primaryGrey: '#dbd3d3',
    $primaryBlue: '#4F6D7A',
    $primaryBlueHome: '#6F8D8A',
    $memberText: '#FFFFFF',
    $border: '#343434',
    $inputText: '#4F6D7A',
    $inputNews: '#797979',
    $darkText: '#343434',
    $lightGray:'#F0F0F0',
    $smallText:'#E0F0F0',
});

export default () => (<AlertProvider><Navigator /></AlertProvider>);
//export default () => <Events />;
//export default () => <News />;
//export default () => <Membership />