import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import RatingSection from './ratingSection';
import ReviewerSection from './reviewerSection';
import {TouchableOpacity} from 'react-native-gesture-handler';

const reviewSection = props => {
  const {service} = props;
  const addReviewHandler = () => {
    alert('add review');
  };
  const viewAllHandler = () => {
    alert('view all');
  };
  const renderItem = ({item}) => <ReviewerSection reviewer={item} />;
  const footer = () => {
    return (
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={addReviewHandler}>
          <Text style={styles.textButton}>ADD REVIEW</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={viewAllHandler}>
          <Text style={styles.textButton}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.text}>Reviews</Text>
      <RatingSection service={service} />
      <FlatList
        style={styles.flatlist}
        data={service.review.users}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={footer}
      />
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
  flatlist: {
    marginTop: 20,
  },
  textButton: {
    color: colors.APP_THEME_COLOR,
    fontSize: 18,
    alignSelf: 'center',
  },
  separator: {
    height: 40,
    width: 2,
    backgroundColor: colors.LIGHT_GREY,
    marginHorizontal: 10,
  },
  row: {
    justifyContent: 'center',
    //   alignItems:'center',
    flexDirection: 'row',
    //   backgroundColor:'lightblue',
  },
  button: {
    height: 40,
    width: 120,
    justifyContent: 'center',
    //   backgroundColor:'yellow'
  },
});

export default reviewSection;
