/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../utils/colors';
import {SCREEN_WIDTH} from '../../utils/constants';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const priceRangeComponent = props => {
  const {getServicePrice, servicePrice} = props;
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.text}>Price Range</Text>
      <Text style={styles.priceValues}>
        {servicePrice[0]} - {servicePrice[1]} SAR{' '}
      </Text>
      <ArrowIcon
        name={!show ? 'ios-arrow-down' : 'ios-arrow-up'}
        size={20}
        style={styles.icon}
        onPress={toggleHandler}
        color={colors.GREY}
      />
      {show ? (
        <MultiSlider
          containerStyle={styles.center}
          values={[servicePrice[0], servicePrice[1]]}
          sliderLength={240}
          onValuesChange={price => getServicePrice(price)}
          min={0}
          max={5000}
          step={100}
        />
      ) : null}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    alignSelf: 'center',
    width: SCREEN_WIDTH - 40,
  },
  text: {
    color: colors.BLACK,
    margin: 10,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 32,
  },
  priceValues: {
    position: 'absolute',
    top: 10,
    right: 50,
  },
  center: {
    alignSelf: 'center',
  },
});

export default priceRangeComponent;
