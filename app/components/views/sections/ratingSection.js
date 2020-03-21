import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {SCREEN_WIDTH} from '../../../utils/constants';
import {Rating} from 'react-native-elements';
import RatingBar from '../ratingBar';

const ratingSection = props => {
  const {service} = props;
  const maxRate = Math.max(...service.review.rates.map(rate => rate.value));
  const renderItem = ({item}) => <RatingBar rate={item} maxRate={maxRate} />;

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <View style={styles.rating}>
          <Text style={styles.text}>Overall Rating</Text>
          <Text style={styles.serviceRating}>
            {service.review.overallRating}
          </Text>
          <Rating
            type="star"
            startingValue={service.review.overallRating}
            readonly
            imageSize={20}
          />
        </View>
        <FlatList
          data={service.review.rates}
          style={styles.flatlist}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key.toString()}
        />
      </View>
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    width: SCREEN_WIDTH - 40,
  },
  text: {
    fontSize: 16,
  },
  serviceRating: {
    fontSize: 36,
  },
  rating: {
    alignItems: 'center',
    width: '40%',
  },
  row: {
    flexDirection: 'row',
  },
  flatlist: {
    flex: 1,
  },
});

export default ratingSection;
