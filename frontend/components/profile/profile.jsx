import React from 'react';
import ModuleNavigator from '../nav/module_nav';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }



  render(){
    return (
      <div>
        <ModuleNavigator/>

        <div className="user-profile">
        <span>Username: {this.props.currentUser.username}</span>
        <div>Completed Runs: {this.props.currentUser.total_completions}</div>
        <div>Total Miles Ran: {this.props.currentUser.total_distance}</div>
        </div>
    </div>
    );
  }

}

export default UserProfile;
