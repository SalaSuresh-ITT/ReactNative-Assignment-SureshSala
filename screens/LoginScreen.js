import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements'
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
    const [bgColor, setBgColor] = useState('#000000');
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={styles.logo}
                source={require("../images/logo.png")}
            />
            <View style={styles.inputContainer}>
                <Icon style={styles.icon} type='material' name="call" size={30} color="#248fd1" />
                <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    onChangeText={(text) => {
                        setInvalidPhoneNumber(false)
                        setPhoneNumber(text)
                    }} />
                <Icon reverse type='material' name='send' size={18} color="#248fd1"
                    onPress={() => {
                        if (phoneNumber.length == 10) {
                            setInvalidPhoneNumber(false)
                            navigation.navigate("OTPScreen", { phone_no: phoneNumber });
                        } else {
                            setInvalidPhoneNumber(true)
                            setBgColor('red')
                        }
                    }} />
            </View>
            {invalidPhoneNumber && (
                <Text style={{ width: '100%', marginLeft: 20, color: bgColor }}>&#9888; Please enter 10 digit number</Text>
            )}
            <Text style={{ width: '100%', marginLeft: 20, color: 'gray' }}>OTP code will be sent to this number</Text>
        </View>);
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 50
    },
    logo: {
        width: '70%',
        height: '50%',
        resizeMode: 'contain',
        marginBottom: 30,
    },
    searchIcon: {
        padding: 10,
        flexDirection: 'row'
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,

    },
    input: {
        color: 'black',
        flex: 1,
        fontSize: 25
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default LoginScreen;