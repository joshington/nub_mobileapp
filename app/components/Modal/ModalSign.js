import React, { useState, Component} from "react";
import  PropTypes from 'prop-types';
import {Alert,Modal,StyleSheet,Text,TouchableHighlight,View} from "react-native";
//import NewMember from  '../components/Text/NewMember'
import InputWithOpacity from '../TextInput/InputWithOpacity';
import AuthButton from  '../Buttons/AuthButton';

import styles from './styles';
const  ModalSign = ({onPress}) => {
    //const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            {/*<Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            > */}
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/*<NewMember text="SignUp" /> */}
                        <InputWithOpacity placeholder="Username" editable={true} />
                        <InputWithOpacity placeholder="Date Of Bsirth" editable={true} />
                        <InputWithOpacity placeholder="Contact" editable={true} />
                        <InputWithOpacity placeholder="District" editable={true} />
                        <InputWithOpacity placeholder="Village/Zone" editable={true} />
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#a10000" }}
                            onPress={
                                onPress
                                //setModalVisible(!modalVisible);
                            }
                        >
                            <Text style={styles.textStyle}>Register</Text>
                        </TouchableHighlight>
                        {/*<TouchableHighlight style={styles.openButton} onPress={() => {setModalVisible(true)}}>
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </TouchableHighlight>*/}
                    </View>
                </View>

            {/*</Modal> */}
            {/*<AuthButton buttonText="check" onPress={() => {setModalVisible(true)}} /> */}
        </View>
    )
}
ModalSign.propTypes = {
    onPress:PropTypes.func,
}
export default ModalSign;