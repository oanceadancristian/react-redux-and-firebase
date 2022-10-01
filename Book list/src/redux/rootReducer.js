import { combineReducers } from 'redux';
import operationsReducers from './reducers/operations';

const rootReducer = combineReducers({
  operationsReducers,
});

export default rootReducer;
