import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import listServices from './reducers/services/services';

//when using multiple reducers we must combine them in only one reducer
const rootReducer = combineReducers({
  listServices,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to enable using redux devTools
const ConfigureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default ConfigureStore;
