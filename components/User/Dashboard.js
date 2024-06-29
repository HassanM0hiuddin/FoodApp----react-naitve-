import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    if (!isFocused) {
      // Reset pressCount when screen is not focused
      setPressCount(0);
    }
  }, [isFocused]);

  const handlePress = () => {
    setPressCount(prevCount => prevCount + 1);

    if (pressCount === 2) {
      // Call your function here
      navigation.navigate('AdminCustomer');
    }
  };

  const handleNavigation = screenname => {
    navigation.navigate(screenname);
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.upper}></View>

        <Text style={styles.headerText}>Dashboard</Text>

        <View style={styles.middle}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('Categorypg')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/scart.png')}
            />
            <Text style={styles.txt}>Start Ordering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('Discount')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/coupon.png')}
            />
            <Text style={styles.txt}>Discounts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('OrderHistory')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/file.png')}
            />
            <Text style={styles.txt}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('Feedback')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/feedback.png')}
            />
            <Text style={styles.txt}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('Profiling')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/user.png')}
            />
            <Text style={styles.txt}>Profiling</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigation('CustomerSignin')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/pr.png')}
            />
            <Text style={styles.txt}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 42,
    marginHorizontal: 100,
    marginTop: 100,
    marginBottom: 20,
  },
  middle: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    height: 150,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(247, 97, 6, 0.9)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  imgitem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
