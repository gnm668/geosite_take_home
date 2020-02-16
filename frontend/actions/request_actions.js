import * as APIUtil from '../util/requests_api_util';

export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveAllRequests = requests => {
    return {
        type: RECEIVE_ALL_REQUESTS,
        requests
    };
};

const receiveRequest = request => {
    return {
        type: RECEIVE_REQUEST,
        request
    };
};

const removeRequest = requestId => {
    return {
        type: REMOVE_REQUEST,
        requestId
    }
};

export const fetchRequests = () => dispatch => {
    return (
        APIUtil.fetchRequests()
            .then(requests => dispatch(receiveAllRequests(requests)))
    );
};

export const fetchRequest = requestId => dispatch => {
    return (
        APIUtil.fetchRequest(requestId)
            .then(request => dispatch(receiveRequest(request)))
    );
};

export const createRequest = request => dispatch => {
    return (
        APIUtil.createRequest(request)
            .then(request => dispatch(receiveRequest(request)))
    );
};

export const updateRequest = () => dispatch => {
    return (
        APIUtil.updateRequest()
            .then(() => dispatch(receiveRequest()))
    );
};

export const deleteRequest = requestId => dispatch => {
    return (
        APIUtil.deleteRequest(requestId)
            .then(() => dispatch(removeRequest(requestId)))
    );
};

