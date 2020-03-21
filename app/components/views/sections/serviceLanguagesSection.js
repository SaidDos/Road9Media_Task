// this reusable component used multiple times
// it's responsible for returning languages
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../utils/colors';

const serviceLanguagesSection = props => {
  const {languages} = props;
  return (
    <View style={styles.section}>
      {languages && languages.length
        ? languages.map((lang, index) => {
            return (
              <View key={index} style={styles.userLang}>
                <Text>{lang}</Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
  },
  userLang: {
    width: null,
    height: null,
    padding: 5,
    marginHorizontal: 5,
    borderColor: colors.LIGHT_GREY,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
  },
});

export default serviceLanguagesSection;
