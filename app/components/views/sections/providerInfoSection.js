import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import {Rating} from 'react-native-elements';
import EmailIcon from 'react-native-vector-icons/Feather';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import ServiceLanguagesSection from '../../views/sections/serviceLanguagesSection';

const providerInfoSection = props => {
  const {service} = props;

  const messageProviderHandler = ()=>{
    alert('message provider')
  };

  return (
    <View>
      <View style={styles.row}>
        <Image
          source={{uri: service.provider.image}}
          style={styles.userImage}
        />
        <Text style={styles.userName}>{service.provider.name}</Text>
      </View>
      <View style={[styles.row, {marginTop: 10, alignItems: 'center'}]}>
        <EmailIcon name="mail" size={20} />
        <Text style={styles.userName}>{service.provider.email}</Text>
      </View>
      <View style={styles.row}>
        <PhoneIcon name="phone" size={20} />
        <Text style={styles.userName}>{service.provider.phone}</Text>
      </View>
      <View style={styles.row}>
        <LocationIcon name="location-on" size={20} />
        <Text style={styles.userName}>{service.provider.address}</Text>
      </View>
      <View style={[styles.row, {marginTop: 10}]}>
        <Text style={styles.speakText}>Speaks: </Text>
        <ServiceLanguagesSection languages={service.provider.languages} />
      </View>
      <TouchableOpacity onPress={messageProviderHandler} style={styles.messButton}>
        <Text style={styles.button}>MESSAGE PROVIDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
  },
  row: {
    flexDirection: 'row',
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
  speakText: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button:{
    color:colors.APP_THEME_COLOR
  },
  messButton:{
    alignSelf:'center', 
    margin:10,
  }
});
export default providerInfoSection;
