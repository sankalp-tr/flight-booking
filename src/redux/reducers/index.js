import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { booking } from './booking.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  booking,
  users,
  alert
});

export default rootReducer;
