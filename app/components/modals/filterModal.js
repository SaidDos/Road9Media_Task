/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/constants';
import RatingComponent from '../views/ratingComponent';
import Separator from '../views/seprator';
import PriceRangeComponent from '../views/priceRangeComponent';

const filterModal = props => {
  const {closeModal, modalVisible, getFilteredData} = props;
  const [providerName, setProviderName] = useState('');
  const [serviceRating, setServiceRating] = useState(0);
  const [servicePrice, setServicePrice] = useState([0, 5000]);

  // handlers
  const getProviderName = name => {
    setProviderName(name);
  };

  const getServiceRating = rating => {
    setServiceRating(rating);
  };

  const getServicePrice = price => {
    setServicePrice(price);
  };

  const filterHandler = () => {
    getFilteredData(providerName, serviceRating, servicePrice);
  };

  return (
    <Modal transparent visible={modalVisible} onRequestClose={closeModal}>
      <View style={styles.overlayView}>
        <View style={styles.modal}>
          <Text style={styles.filterText}>Filter</Text>
          <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
            <CloseIcon name="close" color={colors.black} size={30} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={text => getProviderName(text)}
            placeholder="Service Provider Name"
            placeholderTextColor={colors.LIGHT_GREY}
            underlineColorAndroid={colors.GREY}
            value={providerName}
          />
          <RatingComponent
            getServiceRating={getServiceRating}
            serviceRating={serviceRating}
          />
          <Separator style={styles.separator} />
          <PriceRangeComponent
            getServicePrice={getServicePrice}
            servicePrice={servicePrice}
          />
          <TouchableOpacity style={styles.filterButton} onPress={filterHandler}>
            <Text style={styles.filterTextButton}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
// styling
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.6,
    alignSelf: 'center',
    borderRadius: 10,
  },
  overlayView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginTop: 20,
    marginLeft: 20,
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    margin: 20,
  },
  filterButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  filterTextButton: {
    color: colors.APP_THEME_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default filterModal;
