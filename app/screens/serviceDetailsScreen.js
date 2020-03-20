import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../utils/colors';
import {SCREEN_WIDTH} from '../utils/constants';
import ShareIcon from 'react-native-vector-icons/Entypo';
import ServiceDetailsSection from '../components/views/sections/serviceDetailsSection';
import ProviderDetailsSection from '../components/views/sections/providerDetailsSection';
import Button from '../components/buttons/button';
import Share from 'react-native-share';

const serviceDetailsScreen = props => {
  const {service} = props.navigation.state.params; // getting playlist object from navigation obj

  let shareOptions = {
    title: 'Share Service Name Via',
    message: service.name,
  };
  const shareHandler = () => {
    Share.open(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err);
      });
  };

  const onPressButtonHandler = () => {
    alert('request service');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{flex: 1, marginBottom: 20}}>
      <Image source={{uri: service.image}} style={styles.image} />
      <TouchableOpacity onPress={shareHandler} style={styles.shareIcon}>
        <ShareIcon
          name="share"
          size={30}
          color={colors.WHITE}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <ServiceDetailsSection service={service} />
      <ProviderDetailsSection service={service} />
      <Text style={styles.text}>OTHER SERVICES</Text>
      <Button
        buttonName="REQUEST SERVICE"
        onPressButtonHandler={onPressButtonHandler}
      />
    </ScrollView>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor:colors.WHITE
  },
  image: {
    width: SCREEN_WIDTH,
    height: 120,
  },
  shareIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: colors.APP_THEME_COLOR,
    width: 40,
    height: 40,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.BLACK,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default serviceDetailsScreen;
