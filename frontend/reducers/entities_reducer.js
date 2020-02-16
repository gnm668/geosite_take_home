import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import requestsReducer from './requests_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    requests: requestsReducer
});

export default entitiesReducer;
