import { combineReducers } from 'redux';

import gists from './gists';
import profile from './profile';
import {reducer as form} from 'redux-form';

export default combineReducers({
  form,
  gists,
  profile,
});
