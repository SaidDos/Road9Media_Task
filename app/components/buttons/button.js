import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, ActivityIndicator, ImageBackground,
} from 'react-native';
import colors from '../../utils/colors';


const button = (props) => {
  const {
    onPressButtonHandler, buttonName,
  } = props;
  return (
      <TouchableOpacity style={styles.button}  onPress={onPressButtonHandler}>
          <Text style={styles.text}>{buttonName}</Text>
      </TouchableOpacity>
  );
};

// styling
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 320,
    backgroundColor: colors.APP_THEME_COLOR,
    justifyContent: 'center',
    borderRadius: 10,
    margin:20
  },
  text: {
    color: colors.BLACK,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight:'bold'
  },
});

export default button;
