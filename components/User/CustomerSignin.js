import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  Switch,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Touchable,
} from 'react-native';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {authentication} from '../../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {db} from '../../firebase/firebase-config';
import {firestore} from '@react-native-firebase/firestore';
import {collection, query, where, getDocs} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomerSignin({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressCount, setPressCount] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      // Reset pressCount when screen is not focused
      setPassword('');
    }
  }, [isFocused]);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };

  const validateEmailAndPassword = async () => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    try {
      await AsyncStorage.setItem('userEmail', email);
      console.log('user email stored in async');
    } catch (error) {
      console.log('error storting async email', error);
    }

    if (querySnapshot.empty) {
      Alert.alert('Authentication Error', 'User does not exist');
      return;
    }

    const user = querySnapshot.docs[0].data();

    if (user.password === password) {
      handleNavigation('Dashboard');
    } else {
      Alert.alert('Authentication Error', 'Incorrect Email or Password');
    }
  };

  const handlePress = () => {
    setPressCount(prevCount => prevCount + 1);
    console.log(pressCount);
    if (pressCount === 2) {
      // Call your function here
      navigation.navigate('AdminCustomer');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <TouchableOpacity style={styles.upper} onPress={handlePress}>
        <Image style={styles.img} source={require('./logo.png')} />
        <Text style={styles.txt}>Taste is not only Bio-Chronicle</Text>
        <Text style={styles.txt}>It's also psychological</Text>
      </TouchableOpacity>

      <View style={styles.txtfld}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#F76106"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F76106"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />

        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontSize: 14,
              color: '#F76106',
              alignSelf: 'center',
              marginTop: 20,

              fontWeight: 'bold',
            }}>
            Forget password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sec}>
        <TouchableOpacity
          onPress={validateEmailAndPassword}
          style={styles.TouchableOpacity}>
          <Text style={styles.txt}>Sign-In</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 24,
            color: '#F76106',
            alignSelf: 'center',
            marginVertical: 5,

            fontWeight: 'bold',
          }}>
          ______ OR ______{' '}
        </Text>

        <TouchableOpacity
          onPress={() => handleNavigation('CustomerSignup')}
          style={styles.TouchableOpacity}>
          <Text style={styles.txt}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  upper: {
    paddingTop: -10,
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
    // backgroundColor: '#B9B2AD',
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
