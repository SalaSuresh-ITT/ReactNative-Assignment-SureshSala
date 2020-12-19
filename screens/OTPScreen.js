import React, { useState, useEffect } from 'react';
import { Grid, Col } from 'react-native-easy-grid';
import { Content, Item, Input } from 'native-base';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
const OTPScreen = ({ route, navigation }) => {
    var phoneNumber = route.params.phone_no;
    var otpTextInput = [];
    const [otp, setOTP] = useState([]);
    const [isValidOTP, setIsValidOTP] = useState(true);
    const [bgColor, setBgColor] = useState('gray');
    const inputs = Array(4).fill(0);
    useEffect(() => {
        console.log("useEffect", otpTextInput.length);
        otpTextInput[0]._root.focus();
        if(!isValidOTP){
            console.log("clear inputs");
        }
    })

    const renderInputs = () => {
        console.log("renderInputs");
        
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    maxLength={1}
                    style={{ backgroundColor: 'white', flex: 1, textAlign: 'center', fontSize: 20, height: 50, width: 40, borderColor: bgColor, borderWidth: 1 }}
                    keyboardType="numeric"
                    onChangeText={v => {
                        setBgColor('gray')
                        setIsValidOTP(true)
                        focusNext(j, v)
                    }}
                    onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => otpTextInput[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    const focusPrevious = (key, index) => {
        if (key === 'Backspace' && index !== 0)
            otpTextInput[index - 1]._root.focus();
    }

    const focusNext = (index, value) => {
        if (index < otpTextInput.length - 1 && value) {
            otpTextInput[index + 1]._root.focus();
        }
        if (index === otpTextInput.length - 1) {
            otpTextInput[index]._root.blur();
        }
        console.log("OTP: ", value);
        const enteredOTP = otp
        enteredOTP[index] = value
        setOTP(enteredOTP)
        var finalOTP = otp.join('')
        console.log("Entered OTP: ", finalOTP)
    }

    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter OTP code</Text>
            <Text>Please verify your number with 4 digit OTP code sent to ********{phoneNumber.substring(8, 10)}</Text>
            <Grid style={styles.gridPad}>
                {renderInputs()}
            </Grid>
            {!isValidOTP && (
                <Text style={{ width: '100%', marginLeft: 0, color: 'red' }}>&#9888; Invalid OTP please retry</Text>
            )}
            <Text style={{ fontWeight: 'bold', width: '100%', marginLeft: 0, color: '#000000' }}>Didn't receive code?  
            <Text style={{color: '#e8940e'}}> Resend</Text> </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={{ height: 100, marginTop: 10, flex: 1 }}
                    onPress={() => {
                        console.log("Entered OTP: ", otp.join(''));
                        if (otp.join('').length == 4 && otp.join('') == '1234') {
                            setIsValidOTP(true)
                            alert("OTP is valid")
                        } else {
                            setIsValidOTP(false)
                            setBgColor('red')
                        }
                    }} >
                    <Text style={{ fontSize: 20, color: '#FFFFFF', flex: 1 }}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    gridPad: { margin: 35, marginBottom: 40 },
    txtMargin: { margin: 5 },
    inputRadius: { textAlign: 'center' },
    buttonContainer: {
        width: '50%',
        height: 50,
        marginTop: 40,
        backgroundColor: '#e8940e',
        alignItems: "center",
    }
});
export default OTPScreen;