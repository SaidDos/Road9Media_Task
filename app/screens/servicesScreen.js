import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import colors from '../utils/colors';
import ServiceCard from '../components/cards/serviceCard';

const servicesScreen = props => {

  // const renderItem = ({item}) => (
  //   <TouchableOpacity
  //     onPress={() =>
  //       props.navigation.navigate('ServiceDetailsScreen', {service: item}) //sending service object to ServiceDetails Screen when navigate
  //     }>
  //     <ServiceCard playlist={item} />
  //   </TouchableOpacity>
  // );

  return (
    <View style={styles.container}>
      {/* <FlatList
        style={styles.flatlist}
        data={services}
        extraData={services}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
      /> */}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatlist: {
    marginTop: 20,
  },
});

export default servicesScreen;
