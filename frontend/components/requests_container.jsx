import { connect } from 'react-redux';
import Requests from './requests';
import { 
    fetchRequests,
    fetchRequest,
    createRequest,
    updateRequest,
    deleteRequest
} from '../actions/request_actions';

const mSTP = state => ({
    requests: Object.values(state.entities.requests)
});

const mDTP = dispatch => ({
    fetchRequests: () => dispatch(fetchRequests()),
    fetchRequest: requestId => dispatch(fetchRequest(requestId)),
    createRequest: request => dispatch(createRequest(request)),
    updateRequest: () => dispatch(updateRequest()),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
});

export default connect(mSTP, mDTP)(Requests);