import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import colors from '../utils/colors';

const serviceDetailsScreen = props => {
  const {service} = props.navigation.state.params; // getting playlist object from navigation obj

  return <View style={styles.container} />;
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default serviceDetailsScreen;
