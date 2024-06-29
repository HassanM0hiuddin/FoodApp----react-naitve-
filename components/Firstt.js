import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import Second from './Second';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="Second" component={Second} />
  </Stack.Navigator>;
};
export default function First({navigation}) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('AN'); // Replace 'NextScreen' with the name of your next screen
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground style={styles.img} source={require('./start1.png')}>
      <View style={styles.sec}>
        <TouchableOpacity
          onPress={() => handleNavigation('1')}
          style={{marginBottom: '30%'}}>
          <ActivityIndicator animating={true} color={'#F76106'} size="large" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    padding: 20,
    backgroundColor: 'black',
  },
  upper: {
    paddingTop: 30,
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    // marginBottom:20,
  },
  img: {
    width: '100%',
    height: '100%',
  },

  TouchableOpacity: {
    justifyContent: 'center',
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: 'white',
    marginTop: 5,
    marginHorizontal: 30,
    marginBottom: 70,
    alignItems: 'center',
  },

  sec: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  txtfld: {
    marginTop: 30,
  },

  input: {
    backgroundColor: '#B9B2AD',
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: 'white',
    marginTop: 20,
    marginHorizontal: 25,
  },
});
