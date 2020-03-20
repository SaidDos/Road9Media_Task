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
    activeStyle.color = colors.GREEN;
  }
  return (
    <View style={styles.section}>
      <Text style={styles.serviceName}>{service.name}</Text>
      <View style={styles.row}>
        <Rating
          // showRating
          type="star"
          startingValue={service.review.overallRating}
          readonly
          imageSize={20}
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

const styles = StyleSheet.create({
  section: {
    height: 140,
    width: SCREEN_WIDTH - 40,
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 10,
    marginTop: 10,
    padding:10,
  },
  serviceName: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    // padding: 5,
  },
  serviceType: {
    color: colors.GREY,
    // padding: 5,
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
    // flex:1,
    height: 30,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems:'center'
  },
});
export default serviceDetailsSection;
