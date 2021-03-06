import React from 'react';

class FriendItem extends React.Component {
  constructor(props) {
    super(props);
    this.unfollow=this.unfollow.bind(this);
  }

  unfollow() {
    this.props.deleteFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.friend.id
    });
  }
  render () {
    return (
      <div>
        <section>
          <div>{this.props.friend.name}</div>
          <button onClick={this.unfollow}>Unfollow</button>
        </section>
      </div>
    );
  }
}

export default FriendItem;
