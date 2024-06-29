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
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function Categories({navigation}) {
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
    console.log(screenname);
    navigation.navigate(screenname);
  };

  const handleDishPress = item => {
    console.log(item);
    navigation.navigate('Dishes', {item});
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.upper}></View>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.middle}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('South Asian')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/ButterChicken.jpg')}
            />
            <Text style={styles.txt}>South Asian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('Chinese')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/Dim.jpg')}
            />
            <Text style={styles.txt}>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('Thai')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/Noodles.png')}
            />
            <Text style={styles.txt}>Thai</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('Japanese')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/Sushi.jpg')}
            />
            <Text style={styles.txt}>Japanese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('Beverages')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/Drinks.jpg')}
            />
            <Text style={styles.txt}>Beverages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleDishPress('Sweet Dish')}>
            <Image
              style={styles.imgitem}
              source={require('./Categories/Deserts.jpg')}
            />
            <Text style={styles.txt}>Sweet Treat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerleft}>
            <TouchableOpacity onPress={() => handleNavigation('Help')}>
              <Image
                style={styles.footerIcon}
                source={require('./Categories/support.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerIconContainer}
              onPress={() => handleNavigation('Feedback')}>
              <Image
                style={styles.footerIcon}
                source={require('./Categories/feedback.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerright}>
            <TouchableOpacity onPress={handlePress}>
              <Image style={styles.logo} source={require('./logo.png')} />
            </TouchableOpacity>
          </View>
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
  title: {
    color: 'white',
    fontSize: 50,
    marginHorizontal: 100,
    marginTop: 20,
  },
  middle: {
    marginTop: 30,
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    margin: 9,
    width: 154,
    height: 150,
    paddingTop: 2,
    backgroundColor: 'rgba(247, 97, 6, 0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  imgitem: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 110,
    borderRadius: 15,
  },
  txt: {
    alignSelf: 'center',
    marginTop: 9,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    backgroundColor: 'rgba(247, 97, 6, 0.7)',
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginLeft: '3%',
    marginBottom: '5%',
  },
  footerleft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 15,
  },
  footerright: {
    marginBottom: 15,
  },
  footerIcon: {
    width: 42,
    height: 42,
  },
  footerIconContainer: {
    marginLeft: 10,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});
