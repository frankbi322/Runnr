
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {

  let formType = location.pathname;

  if (formType === '/') {
    formType = '/login';
  } else {
    formType = location.pathname;
  }

  // console.log(location.pathname);
  let processForm = login;
  processForm = (formType === '/login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
