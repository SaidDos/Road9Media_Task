import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../../utils/colors';
import {SCREEN_WIDTH} from '../../../utils/constants';
import FilterIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SortIcon from 'react-native-vector-icons/FontAwesome';

const filterSortSection = props => {
  const {numOfServices, sortHandler, filterHandler} = props;

  return (
    <View style={styles.section}>
      <Text style={styles.numOfServices}>{numOfServices} Services</Text>
      <View style={styles.filterSortSection}>
        <FilterIcon
          name="filter"
          size={30}
          style={styles.center}
          onPress={filterHandler}
          color={colors.GREY}
        />
        <Text style={[styles.center, {color:colors.GREY}]}>Filter</Text>
        <View style={styles.separator} />
        <SortIcon
          name="sort"
          size={30}
          style={styles.icon}
          onPress={sortHandler}
          color={colors.APP_THEME_COLOR}
        />
        <Text style={[styles.center, {color:colors.APP_THEME_COLOR}]}>Sort</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    height: 50,
    width: SCREEN_WIDTH - 40,
    // backgroundColor: colors.LIGHT_GREY,
    alignItems: 'center',
  },
  filterSortSection: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  center: {
    alignSelf: 'center',
  },
  icon: {
    padding: 5,
  },
  separator: {
    width: 2,
    height: 30,
    backgroundColor: colors.GREY,
    alignSelf: 'center',
    margin: 5,
  },
  numOfServices:{
      color:colors.GREY,
      fontWeight:'bold',
  }
});
export default filterSortSection;
