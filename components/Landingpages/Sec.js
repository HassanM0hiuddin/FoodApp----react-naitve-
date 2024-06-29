import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Switch,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CustomerSignin from './CustomerSignin';

export default function Sec({navigation}) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  return (
    <ImageBackground style={styles.img} source={require('./Artboard.png')}>
      <View style={styles.sec}>
        <TouchableOpacity
          onPress={() => handleNavigation('2')}
          style={styles.touchable}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Next
          </Text>
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
  },
  img: {
    width: '100%',
    height: '100%',
  },
  touchable: {
    justifyContent: 'center',
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: 'white',
    marginTop: 5,
    marginHorizontal: 100,
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
