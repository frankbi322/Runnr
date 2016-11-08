import React from 'react';
import UserProfile from './user_profile';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.requestOtherUsers();
  }

  handleInput(e) {
    debugger;
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

      return <UserProfile key={user.id}
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
          <div method="get">
            <input type="text" placeholder="Find by Username" onChange={this.handleInput}/>
          </div>
          <br/>
          <div>
            <ul>
              {results}
            </ul>
          </div>
        </div>
      );
  }
}

export default FindFriends;
