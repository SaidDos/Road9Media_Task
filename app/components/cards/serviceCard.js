import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../utils/colors';

const serviceCard = props => {
  const {service} = props;

  return (
    <View style={styles.card}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 70,
    width: 319.3,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginBottom: 20,
  },
});
export default serviceCard;
