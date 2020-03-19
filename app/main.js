import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import ServicesStackNav from './navigations/stackNavigations/servicesStackNav';
import colors from './utils/colors';
import {Provider} from 'react-redux';
import store from '../app/store/configureStore';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.APP_THEME_COLOR}
        barStyle="dark-content"
      />
       <Provider store={store()}>
      <ServicesStackNav />
       </Provider>
    </SafeAreaView>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
