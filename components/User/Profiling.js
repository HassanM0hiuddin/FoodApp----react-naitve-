import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {TextInput, List, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Profiling() {
  const navigation = useNavigation();

  const [Fname, setFname] = useState('Hassan');
  const [Lname, setLname] = useState('Mohiuddin');
  const [email, setEmail] = useState('Hassan@gmail.com');
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleVariable = () => {
    setIsToggled(!isToggled);
  };

  const dropdownOptions = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const handleValueChange = value => {
    setSelectedValue(value);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.upper}>
        <Text style={[styles.txt, {fontSize: 32}]}>Account Details</Text>
        <TouchableOpacity style={styles.editButton} onPress={toggleVariable}>
          <Text style={[styles.txt, {color: '#F76106'}]}>
            {isToggled ? 'Done' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginBottom: '5%', marginTop: 8}}>
        <TextInput
          outlineColor="#F76106"
          activeUnderlineColor="#F76106"
          style={styles.input}
          label="First Name"
          value={Fname}
          onChangeText={text => setFname(text)}
          editable={isToggled}
        />

        <TextInput
          outlineColor="#F76106"
          activeUnderlineColor="#F76106"
          style={styles.input}
          label="Last Name"
          value={Lname}
          onChangeText={text => setLname(text)}
          editable={isToggled}
        />

        <TextInput
          outlineColor="#F76106"
          activeUnderlineColor="#F76106"
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          editable={isToggled}
        />

        <Text
          style={[
            styles.txt,
            {justifyContent: 'flex-end', marginVertical: 15},
          ]}>
          OPTIONAL
        </Text>

        <List.Accordion
          style={styles.lst}
          title={selectedValue || 'Select Category'}
          titleStyle={{color: '#F76106'}}
          expanded={isDropdownVisible && isToggled}
          onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
          {dropdownOptions.map(option => (
            <List.Item
              key={option.value}
              title={option.label}
              titleStyle={{color: '#F76106'}}
              left={props => (
                <RadioButton.Android
                  {...props}
                  color="#F76106"
                  status={
                    selectedValue === option.value ? 'checked' : 'unchecked'
                  }
                />
              )}
              onPress={() => handleValueChange(option.value)}
            />
          ))}
        </List.Accordion>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingBottom: 300,
    backgroundColor: 'black',
  },
  upper: {
    paddingTop: 40,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
    paddingHorizontal: 18,
  },
  txt: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    height: 50,
    color: 'white',
    marginTop: 20,
    borderColor: '#F76106',
  },
  lst: {
    marginTop: 20,
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#252525',
    borderRadius: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
