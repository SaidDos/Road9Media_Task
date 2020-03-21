/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import colors from '../utils/colors';
import {SCREEN_WIDTH} from '../utils/constants';
import ShareIcon from 'react-native-vector-icons/Entypo';
import ServiceDetailsSection from '../components/views/sections/serviceDetailsSection';
import ProviderDetailsSection from '../components/views/sections/providerDetailsSection';
import Button from '../components/buttons/button';
import Share from 'react-native-share';
import ServiceCard from '../components/cards/serviceCard';

const serviceDetailsScreen = props => {
  const {service, services} = props.navigation.state.params; // getting service object and services array from navigation obj
  const [remainedServices, setRemainedServices] = useState([]);

  useEffect(() => {
    let remainedServicesArr = JSON.parse(JSON.stringify(services));
    remainedServicesArr.splice(remainedServicesArr[service], 1);
    setRemainedServices(remainedServicesArr);
  }, [service, services]);

  // handlers
  let shareOptions = {
    title: 'Share Service Name Via',
    message: service.name, // here we share service name, but we can share anything like image, price,..etc
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
    // supposed to request to use that service
    alert('request service');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={
        () =>
          props.navigation.navigate('ServiceDetailsScreen', {
            service: item,
            services: services,
          }) //sending service object and services array to ServiceDetails Screen when navigate
      }>
      <ServiceCard service={item} cardStyle={styles.cardStyle} />
    </TouchableOpacity>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}>
      <Image source={{uri: service.image}} style={styles.image} />
      <TouchableOpacity onPress={shareHandler} style={styles.shareIcon}>
        <ShareIcon
          name="share"
          size={30}
          color={colors.WHITE}
          style={styles.center}
        />
      </TouchableOpacity>
      <ServiceDetailsSection service={service} />
      <ProviderDetailsSection service={service} />
      <Text style={styles.text}>OTHER SERVICES</Text>
      {remainedServices && remainedServices.length ? (
        <FlatList
          horizontal
          style={styles.flatlist}
          data={remainedServices}
          extraData={remainedServices}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      ) : (
        <Text>Thers's No Other Services</Text>
      )}
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
    alignItems: 'center',
    backgroundColor: colors.WHITE,
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
    margin: 20,
  },
  flatlist: {
    margin: 20,
  },
  cardStyle: {
    height: 300,
    backgroundColor: colors.WHITE,
    width: SCREEN_WIDTH * 0.7,
    marginRight: 20,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  center: {
    alignSelf: 'center',
  },
});

export default serviceDetailsScreen;
