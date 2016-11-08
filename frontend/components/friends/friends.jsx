import React from 'react';
import FriendItem from './friend_item';

class Friends extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestOtherUsers();
  }

  render(){
    let friendsList = [];

    for (let friendId in this.props.friends) {
      friendsList.push(<FriendItem key={friendId}
        friend={this.props.friends[friendId]}
        currentUser={this.props.currentUser}
        deleteFollow={this.props.deleteFollow}/>);
    }

    return (
      <div>
        <ul>
          {friendsList}
        </ul>
      </div>
    );
  }
}

export default Friends;
