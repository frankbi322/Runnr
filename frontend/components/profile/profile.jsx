import React from 'react';
import ModuleNavigator from '../nav/module_nav';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }



  render(){
    return (
      <div>
        <div className="profile">
          <div>Username: {this.props.currentUser.username}</div>
          <div>Completed Runs: {this.props.currentUser.total_completions}</div>
          <div>Total Miles Ran: {this.props.currentUser.total_distance.toFixed(2)}</div>
        </div>
    </div>
    );
  }

}

export default UserProfile;
