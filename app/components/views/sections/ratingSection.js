import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../../../utils/colors';
import { SCREEN_WIDTH } from '../../../utils/constants';
import {Rating} from 'react-native-elements';

const ratingSection = props => {
  const {service} = props;
  return (
    <View style={styles.section}>
        <View style={styles.row}>
        <View style={styles.rating}>
     <Text style={styles.text}>Overall Rating</Text>
     <Text style={styles.serviceRating}>{service.review.overallRating}</Text>
     <Rating
          // showRating
          type="star"
          startingValue={service.review.overallRating}
          readonly
          imageSize={20}
        //   style={{alignSelf:'flex-start'}}
        />
       </View>
        </View>

    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
      width:SCREEN_WIDTH - 40
  },
  text:{
    fontSize:18
  },
  serviceRating:{
      fontSize:36
  },
  rating:{
      alignItems:'center',
      width:'40%',
    //   backgroundColor:'blue'
  },
  row:{
      flexDirection:'row'
  }
});

export default ratingSection;
