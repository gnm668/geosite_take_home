import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../actions/session_actions';
import Splash from './splash';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(loginUser(user)),
    // logoutUser: () => dispatch(logoutUser()),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));