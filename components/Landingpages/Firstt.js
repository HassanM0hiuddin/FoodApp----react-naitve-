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
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Provider,
  ActivityIndicator,
  MD2Colors,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function First({navigation}) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('2');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground style={styles.img} source={require('./start1.png')}>
      <View style={styles.sec}>
        <TouchableOpacity
          onPress={() => handleNavigation('1')}
          style={styles.touchable}>
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
