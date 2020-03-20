import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../utils/colors';
import {SCREEN_WIDTH} from '../../utils/constants';
import {Rating} from 'react-native-elements';

const serviceCard = props => {
  const {service} = props;

  return (
    <View style={styles.card}>
      <Image source={{uri: service.image}} style={styles.image} />
      <Text style={styles.serviceName}>{service.name}</Text>
      <Text style={styles.serviceType}>{service.type}</Text>
      <View style={styles.row}>
        <Rating
          // showRating
          type="star"
          startingValue={service.review.overallRating}
          readonly
          imageSize={20}
          style={{padding:5}}
        />
        <Text style={styles.serviceRating}>{service.review.overallRating}</Text>
        <Text style={styles.servicePrice}>{service.price} SAR <Text style={{color:colors.GREY}}>/ Hour</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: SCREEN_WIDTH - 40,
    backgroundColor: colors.WHITE,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  serviceName: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  serviceType: {
    color: colors.LIGHT_GREY,
    padding: 5,
  },
  servicePrice: {
    position: 'absolute',
    right: 10,
    alignSelf:'center',
    color:colors.APP_THEME_COLOR
  },
  serviceRating: {
    justifyContent: 'flex-start',
    alignSelf:'center'
  },
  row: {
    // flex:1,
    height: 30,
    // backgroundColor:'yellow',
    flexDirection: 'row',

  },
});
export default serviceCard;
