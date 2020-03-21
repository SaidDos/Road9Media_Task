import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import Separator from '../../views/seprator';
import ServiceDescreptionSection from '../sections/serviceDescreptionSection';
import ServiceLanguagesSection from '../sections/serviceLanguagesSection';
import ProviderInfoSection from '../sections/providerInfoSection';
import ServiceTermsConditionsSection from '../sections/serviceTermsConditionsSection';
import ReviewSection from './reviewsSection';

const providerDetailsSection = props => {
  const {service} = props;

  return (
    <View style={styles.section}>
      <ProviderInfoSection service={service} />
      <Separator />
      <ServiceDescreptionSection service={service} />
      <Separator />
      <Text style={styles.langText}>Languages</Text>
      <ServiceLanguagesSection languages={service.languages} />
      <Separator style={styles.separator} />
      <ServiceTermsConditionsSection service={service} />
      <Separator style={styles.separator} />
      <ReviewSection service={service} />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    height: null,
    width: SCREEN_WIDTH - 40,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    borderColor: colors.GREY,
    borderWidth: 1,
  },
  langText: {
    fontWeight: 'bold',
    color: colors.GREY,
    margin: 10,
  },
  separator: {
    margin: 10,
    alignSelf: 'center',
  },
});
export default providerDetailsSection;
