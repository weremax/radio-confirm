import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import simple from './simple';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  form: formReducer,
  simple,
});

export default rootReducer;