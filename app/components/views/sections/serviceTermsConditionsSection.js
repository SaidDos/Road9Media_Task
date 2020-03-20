import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import ArrowIcon from 'react-native-vector-icons/Ionicons';

const serviceTermsConditionsSection = props => {
  const {service} = props;
  const [show, setShow] = useState(false);

  const toggleHandler=()=>{
    setShow(!show);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.text}>Terms and Conditions</Text>
      <ArrowIcon
        name={!show? 'ios-arrow-down' : 'ios-arrow-up'}
        size={20}
        style={styles.icon}
        onPress={toggleHandler}
        color={colors.GREY}
      />
      {show?(<TextInput editable={false} value={service.termsAndConditions} multiline />):null}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    width: SCREEN_WIDTH - 40,
  },
  text: {
    color: colors.GREY,
    margin: 10,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default serviceTermsConditionsSection;
