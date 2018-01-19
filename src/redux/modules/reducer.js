import { combineReducers } from 'redux';

import gists from './gists';
import {reducer as form} from 'redux-form';

export default combineReducers({
  form,
  gists,
});
