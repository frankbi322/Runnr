import {connect} from 'react-redux';
import {deleteFollow,createFollow} from '../../actions/follow_actions';
import ProfileIndex from './profile_index';
import {requestOtherUsers} from '../../actions/user_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
