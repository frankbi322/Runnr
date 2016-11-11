import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  componentWillMount(){
    this.props.fetchFollows();
  }

  follow() {
    this.props.createFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    });
  }

  unfollow() {


    const follows = this.props.currentUser.follows;
    const test = follows.filter(follow => (follow.followee_id===this.props.user.id));
    debugger;
    if (test.length>0) {
    const deleteId = test[0].id;
    this.props.deleteFollow(
      deleteId
    );
    }
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
