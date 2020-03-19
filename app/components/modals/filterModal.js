import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/constants';

const filterModal = props => {
  const {closeModal, modalVisible} = props;

  return (
    <Modal transparent visible={modalVisible} onRequestClose={closeModal}>
      <View style={styles.overlayView}>
        <View style={styles.modal}>
          <Text style={styles.filterText}>Filter</Text>
          <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
            <CloseIcon name="close" color={colors.black} size={30} />
          </TouchableOpacity>
          <View style={styles.row} />
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
    // alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginTop: 15,
    marginLeft: 15,
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default filterModal;
