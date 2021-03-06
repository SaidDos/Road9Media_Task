import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ratingBar = props => {
  const {rate, maxRate} = props;
  const MAX_WIDTH = 80; // setting max bar length of 80
  const barWidth = MAX_WIDTH * (rate.value / maxRate); // calculating bar width of each rate to be responsive

  return (
    <View style={styles.row}>
      <Text>{rate.key} Starts</Text>
      <View style={[styles.bar, {width: barWidth}]} />
      <Text>
        {rate.key} ({rate.value})
      </Text>
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    height: 10,
    backgroundColor: '#ffe234',
    alignSelf: 'center',
    margin: 5,
  },
});

export default ratingBar;
