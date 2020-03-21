import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import colors from '../../utils/colors';

const ratingBar = (props) => {
  const { rate, maxRate } = props;
  const MAX_WIDTH = 80;
  alert(maxRate)
    let barWidth = MAX_WIDTH * (rate.value/maxRate);

  return (
      <View style={styles.row}>

  <Text>{rate.key} Starts</Text>
          <View style={[styles.bar, { width: barWidth}]} />
          <Text>{rate.key} ({rate.value})</Text>
      </View>
  );
};

// styling
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
  bar: {
    height: 10,
    backgroundColor: '#ffe234',
    alignSelf:'center',
    margin: 5
  },
});

export default ratingBar;
