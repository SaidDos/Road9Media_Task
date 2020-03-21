import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../../utils/colors';
import {SCREEN_WIDTH} from '../../utils/constants';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';

const ratingComponent = props => {
  const {getServiceRating, serviceRating} = props;
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.text}>Rating</Text>
      <ArrowIcon
        name={!show ? 'ios-arrow-down' : 'ios-arrow-up'}
        size={20}
        style={styles.icon}
        onPress={toggleHandler}
        color={colors.GREY}
      />
      {show ? (
        <Rating
          // showRating
          type="star"
          startingValue={serviceRating}
          imageSize={30}
          style={{padding: 5}}
          onFinishRating={getServiceRating}
        />
      ) : null}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    width: SCREEN_WIDTH - 40,
  },
  text: {
    color: colors.BLACK,
    margin: 10,
    fontWeight: 'bold',
    marginLeft:20
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 40,
  },
});

export default ratingComponent;
