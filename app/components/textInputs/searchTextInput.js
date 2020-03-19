import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../../utils/colors';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import {SCREEN_WIDTH} from '../../utils/constants';
 
const searchTextInput = props => {
  const {onchangeText, searchTerm} = props;
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onchangeText(text)}
        placeholder={'Search by service name...'}
        placeholderTextColor={colors.BLACK}
        value={searchTerm}
      />
      <SearchIcon
        size={30}
        style={styles.searchIcon}
        color={colors.BLACK}
        name="ios-search"
      />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  textInput: {
    width: SCREEN_WIDTH -40,
    height: 50,
    backgroundColor:colors.APP_THEME_COLOR,
    alignSelf: 'center',
  },
  searchIcon: {
    position:'absolute',
    right:20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default searchTextInput;
