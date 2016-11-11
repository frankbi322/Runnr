import React from 'react';
import UserProfile from './user_profile';
import ModuleNavigator from '../nav/module_nav';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  componentDidMount(){
    this.props.requestOtherUsers();
  }



  handleInput(event) {
    this.setState({input: event.currentTarget.value});
  }

  matches() {
    const matches=[];
    for (let userId in this.props.users) {
      let substring = this.props.users[userId].username.slice(0,this.state.input.length);
      if (substring.toLowerCase() === this.state.input.toLowerCase()) {
        if (this.props.users[userId].username!==this.props.currentUser.username) {
        matches.push(this.props.users[userId]);
      }
      }
    }
    return matches;

  }

  render() {
    const friendIds = this.props.follows.map(follow => {
      if (follow.follower_id===this.props.currentUser.id) {
        return follow.followee_id;
      }
    });

    let results = this.matches().map((user,index) => {
      let followStatus;
      if (friendIds.includes(user.id)) {
        followStatus="Following";
      } else {
        followStatus="Not Following";
      }
      return <UserProfile key={user.id}
        user={user}
        currentUser={this.props.currentUser}
        deleteFollow={this.props.deleteFollow}
        createFollow={this.props.createFollow}
        followStatus={followStatus}
        fetchFollows={this.props.fetchFollows}
        />;
    });


    // let followStatus;
    // let that=this;
    // let results = this.matches().map((user,index) => {
    //
    // let friendIds =  that.props.friends.map((friend) => {
    //     return friend.id;
    //   });
    //   if (friendIds.includes(user.id)) {
    //     followStatus = "Following";
    //   } else {
    //     followStatus = "Not Following";
    //   }


    // });

      return (
        <div>
          <ModuleNavigator/>
          <span>Add Friends!</span>
          <div method="get">
            <input type="text" placeholder="Find by Username" onChange={this.handleInput}/>
          </div>
          <br/>
          <div>
            <ul className="users-list">
              {results}
            </ul>
          </div>
        </div>
      );
  }
}

export default FindFriends;
