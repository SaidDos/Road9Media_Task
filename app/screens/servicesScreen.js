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

const servicesScreen = props => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(null); //initializing search term by null
const [modalVisible, setModalVisible]=useState(false);
  const isLoading = useSelector(state => state.listServices.isLoading);
  const services = useSelector(state => state.listServices.services);

  const onChangeText = term => {
    setSearchTerm(term);
  };

  const listServicesRequestResponseHandler = {
    onSuccess: () => {},
    onFail: error => alert(error),
  };

  useEffect(() => {
    dispatch(listServices(listServicesRequestResponseHandler)); //fetching services when mounting screen
  }, []);

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
    alert('sort');
  };

  const filterHandler = () => {
    setModalVisible(true);
    // alert('filter');
  };

  const closeModal =()=>{
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <SearchTextInput onchangeText={onChangeText} searchTerm={searchTerm} />
      </View>
      <>
      <FilterSortSection
        numOfServices={services.length}
        sortHandler={sortHandler}
        filterHandler={filterHandler}
      />
      </>
      <FlatList
        data={services}
        extraData={services}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={footer}
      />
       <ApplyLoanModal
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
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
