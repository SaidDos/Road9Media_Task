import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import {Rating} from 'react-native-elements';

const serviceDetailsSection = props => {
  const {service} = props;
  let activeStyle = {
    color: colors.GREY,
  };
  if (service.active) {
    // active with green color in case it's true otherwise it will be grey
    activeStyle.color = colors.GREEN;
  }
  return (
    <View style={styles.section}>
      <Text style={styles.serviceName}>{service.name}</Text>
      <View style={styles.row}>
        <Rating
          type="custom"
          startingValue={service.review.overallRating}
          readonly
          imageSize={20}
          style={styles.rating}
          tintColor={'#f5f5f5'}
        />
        <Text style={styles.serviceRating}>{service.review.overallRating}</Text>
        <Text style={[styles.servicePrice, {color: colors.GREY}]}>
          {service.deliveredOrders} Delivered Orders
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serviceType}>{service.type}</Text>
        <Text style={styles.servicePrice}>
          {service.price} SAR <Text style={{color: colors.GREY}}>/ Hour</Text>
        </Text>
      </View>
      <Text style={activeStyle}>Active</Text>
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    height: 140,
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    borderColor: colors.GREY,
    borderWidth: 1,
  },
  serviceName: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceType: {
    color: colors.GREY,
  },
  servicePrice: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
    color: colors.APP_THEME_COLOR,
  },
  serviceRating: {
    alignSelf: 'center',
  },
  row: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    padding: 5,
  },
});
export default serviceDetailsSection;
