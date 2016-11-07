import React from 'react';
import Profile from './profile';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({input: event.currentTarget.value});
  }

  matches() {
    const matches=[];
    for (let userId in this.props.users) {
      let substring = this.props.users[userId].username.slice(0,this.state.input.length);
      if (substring.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(this.props.users[userId]);
      }
    }
    return matches;
  }

  render() {
    let followStatus;
    let results = this.matches().map((user,index) => {
      if (this.props.friends.hasOwnProperty(user.id)) {
        followStatus = "Following";
      } else {
        followStatus = "Not Following";
      }

      return <Profile key={user.id}
        user={user}
        currentUser={this.props.currentUser}
        deleteFollow={this.props.deleteFollow}
        createFollow={this.props.createFollow}
        followStatus={followStatus}
        />;
    });
      return (
        <div>
          <span>Add Friends!</span>
          <input type="text" placeholder="Find by Username" onChange={this.handleInput}/>
          {results}
        </div>
      );
  }

}
export default ProfileIndex;
