import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../../../utils/colors';
import { SCREEN_WIDTH } from '../../../utils/constants';

const serviceDescreptionSection = props => {
  const {service} = props;
  return (
    <View style={styles.section}>
      <Text style={styles.text}>Description</Text>
      <TextInput editable={false} value={service.description} multiline  />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
      width:SCREEN_WIDTH - 40
  },
  text:{
    color: colors.GREY,
    margin:10,
    fontWeight:'bold',
  }
});

export default serviceDescreptionSection;
