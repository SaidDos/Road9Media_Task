import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../../../utils/colors';
import { SCREEN_WIDTH } from '../../../utils/constants';

const serviceLanguagesSection = props => {
  const {languages} = props;
  return (
    <View style={styles.section}>
       {languages && languages.length ? 
    languages.map((lang, index) => {
        return (
          <View key={index} style={styles.userLang}>
            <Text>{lang}</Text>
          </View>
        );
      }):null
}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  section: {
    flexDirection:'row',
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
