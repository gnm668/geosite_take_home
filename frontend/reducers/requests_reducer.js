import {
    RECEIVE_ALL_REQUESTS,
    RECEIVE_REQUEST,
    REMOVE_REQUEST
} from '../actions/request_actions';

const requestsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_REQUESTS:
            return Object.assign({}, action.requests);
        case RECEIVE_REQUEST:
            return Object.assign({}, oldState, { [action.request.id]: action.request });
        case REMOVE_REQUEST:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.requestId]
            return nextState;
        default:
            return oldState;
    }
};

export default requestsReducer;