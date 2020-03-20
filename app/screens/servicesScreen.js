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
import {listServices} from '../store/actions/actionCreators';
import {useDispatch, useSelector} from 'react-redux';
import SearchTextInput from '../components/textInputs/searchTextInput';
import FilterSortSection from '../components/views/sections/filterSortSection';
import ApplyLoanModal from '../components/modals/filterModal';
import {search} from '../utils/functions/search';
import {getSortedArray} from '../utils/functions/getSortedArray';

const servicesScreen = props => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(null); //initializing search term by null
  const [modalVisible, setModalVisible] = useState(false);
  const isLoading = useSelector(state => state.listServices.isLoading);
  let services = useSelector(state => state.listServices.services);
  const [serviceList, setServiceList] = useState([]);

  const onChangeText = term => {
    if (term) {
      let searchResult = search(services, term);
      setServiceList(searchResult);
    } else {
      setServiceList(services);
    }
  };

  const listServicesRequestResponseHandler = {
    onSuccess: () => {},
    onFail: error => alert(error),
  };

  useEffect(() => {
    dispatch(listServices(listServicesRequestResponseHandler)); //fetching services when mounting screen
  }, []);

  useEffect(() => {
    setServiceList(services);
  }, [services]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={
        () => props.navigation.navigate('ServiceDetailsScreen', {service: item}) //sending service object to ServiceDetails Screen when navigate
      }>
      <ServiceCard service={item} />
    </TouchableOpacity>
  );

  const footer = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.APP_THEME_COLOR} />;
    }
    return <Text style={styles.footer}> No More Services </Text>;
  };

  const sortHandler = () => {
    let sortedServices = getSortedArray(serviceList);
    setServiceList(sortedServices);
    // alert('sort');
  };

  const filterHandler = () => {
    setModalVisible(true);
    // alert('filter');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <SearchTextInput onchangeText={onChangeText} searchTerm={searchTerm} />
      </View>
      <>
        <FilterSortSection
          numOfServices={serviceList.length}
          sortHandler={sortHandler}
          filterHandler={filterHandler}
        />
      </>
      <FlatList
       keyboardShouldPersistTaps="always"
        data={serviceList}
        extraData={serviceList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={footer}
      />
      <ApplyLoanModal modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },
  footer: {
    alignSelf: 'center',
  },
});

export default servicesScreen;
