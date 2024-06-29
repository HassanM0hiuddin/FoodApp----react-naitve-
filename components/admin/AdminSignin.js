import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AdminSignin() {
  const [passCode, setPassCode] = useState('');
  const navigation = useNavigation();

  const handlePassCodeChange = text => {
    setPassCode(text);
  };

  const handleNavigation = screenname => {
    navigation.navigate(screenname);
  };

  const handleSignIn = () => {
    if (passCode === '2580') {
      handleNavigation('AdminDashboard');
    } else {
      Alert.alert('Invalid PassCode', 'Please enter the correct passcode');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.upper}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>Admin Use Only</Text>
      </View>

      <View style={styles.txtfld}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter PassCode"
          placeholderTextColor="#F76106"
          value={passCode}
          onChangeText={handlePassCodeChange}
          secureTextEntry
        />
      </View>

      <View style={styles.sec}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.TouchableOpacity}>
          <Text style={styles.txt}>Sign-In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  upper: {
    paddingTop: 60,
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  img: {
    width: 188,
    height: 188,
    marginBottom: 18,
  },
  TouchableOpacity: {
    justifyContent: 'center',
    backgroundColor: '#F76106',
    padding: 10,
    borderRadius: 50,
    height: 50,
    color: 'white',
    marginTop: 5,
    marginHorizontal: 80,
  },
  sec: {
    marginTop: 50,
  },
  txtfld: {
    marginTop: 60,
  },
  input: {
    padding: 10,
    borderRadius: 20,
    height: 50,
    color: 'white',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#F76106',
    marginHorizontal: 25,
  },
});
