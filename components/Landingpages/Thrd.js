import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';

export default function Thrd({navigation}) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  return (
    <ImageBackground style={styles.img} source={require('./sweet.png')}>
      <View style={styles.sec}>
        <TouchableOpacity
          onPress={() => handleNavigation('3')}
          style={styles.TouchableOpacity}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              fontWeight: 'bold',
            }}>
            {' '}
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
