import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {SCREEN_WIDTH} from '../../../utils/constants';
import {Rating} from 'react-native-elements';
import Separator from '../seprator';

const reviewerSection = props => {
  const {reviewer} = props;
  return (
    <View>
      <View style={styles.section}>
        <Image source={{uri: reviewer.image}} style={styles.image} />
        <View style={styles.column}>
          <Text>{reviewer.name}</Text>
          <Rating
            type="star"
            startingValue={reviewer.rate}
            readonly
            imageSize={20}
          />
        </View>
        <Text style={styles.date}>{reviewer.date}</Text>
      </View>
      <TextInput editable={false} value={reviewer.review} multiline />
      <Separator style={styles.separator} />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    width: SCREEN_WIDTH - 40,
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  date: {
    position: 'absolute',
    right: 20,
  },
  separator: {
    alignSelf: 'center',
    margin: 10,
    width: '90%',
  },
});

export default reviewerSection;
