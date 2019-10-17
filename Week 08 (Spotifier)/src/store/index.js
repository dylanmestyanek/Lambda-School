import { combineReducers } from 'redux';

import { dashboardReducer } from './reducers/dashaboardReducer';
import { userReducer } from './reducers/userReudcer';
import { searchReducer } from './reducers/searchReducer';

export const rootReducer = combineReducers({search: searchReducer, user: userReducer, dashboard: dashboardReducer})