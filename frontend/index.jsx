import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logoutUser} from './actions/session_actions'

//test
// import {
//     fetchRequests,
//     fetchRequest,
//     createRequest,
//     updateRequest,
//     deleteRequest,
// } from './util/requests_api_util';
//test

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //test
    // window.fetchRequests = fetchRequests;
    // window.fetchRequest = fetchRequest;
    // window.createRequest = createRequest;
    // window.updateRequest = updateRequest;
    // window.deleteRequest = deleteRequest;

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.store = store;
    // window.store.getState = store.getState;
    // window.logoutUser = logoutUser;
    //test

    ReactDOM.render(<Root store={store} />, root);
});