import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let user = this.props.currentUser;

    return (
      <div className="profile">
        <span>Username: {user.username}</span>
        <div>Completed Runs: {user.completed_runs}</div>
        <div className="distance-box">Total Distance Covered: {user.total_distance}</div>
      </div>
    );
  }

}

export default UserProfile;
