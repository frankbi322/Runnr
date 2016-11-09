import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    this.props.createFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    });
  }

  unfollow() {
    this.props.deleteFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    });
  }

  render(){
    let followButton;
    if (this.props.followStatus === "Following") {
      followButton =
      <div>
        <button onClick={this.unfollow}>Remove Friend</button>
      </div>;
    } else {
      followButton =
      <div>
        <button onClick={this.follow}>Add Friend!</button>
      </div>;
    }


    return (
      <div className="user-item">
        <span>Username: {this.props.user.username}</span>
        {followButton}
      </div>
    );
  }

}

export default UserProfile;
