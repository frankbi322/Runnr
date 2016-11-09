import {connect} from 'react-redux';
import {deleteFollow,createFollow} from '../../actions/follow_actions';
import ProfileIndex from './profile_index';
import {requestOtherUsers} from '../../actions/user_actions';


const mapStateToProps = state => ({
  friends: state.friends,
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestOtherUsers: () => dispatch(requestOtherUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
