import {connect} from 'react-redux';
import {deleteFollow,createFollow} from '../../actions/follow_actions';
import {requestOtherUsers} from '../../actions/user_actions';
import Profile from './profile';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
