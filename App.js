import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import OTPScreen from './screens/OTPScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {

  // return (
  //   <View>
  //     <Text>Demo Application</Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  //       onChangeText={text => onChangeText(text)}
  //       placeholder="Enter Phone number"
  //     // value={value}
  //     />
  //     <Button title="TEST" color="black" onPress={()=>{
  //       console.log("TESTTSET")
  //     }}/>
  //   </View>
  // );
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}

        />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const login = () => {
  Console.log("Login Function")
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
});

export default App;
