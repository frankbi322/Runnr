
import React from 'react';
import { Link } from 'react-router';
import ModuleNavigator from '../nav/module_nav';
import {withRouter} from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextProps){
    if ((nextProps.currentUser === null) && (this.props.currentUser)) {
      this.props.router.push('/login');
    }
  }

  // sessionLinks () {
  //   return (
  //   <nav className="no-current-user">
  //     <div className="signup-login">
  //     <a href="#/login"><button>LOG IN</button></a>
  //     <a href="#/signup"><button>SIGN UP</button></a>
  //     </div>
  //   </nav>
  //   )
  // };

//   personalGreeting (currentUser, logout) {
//     return(
//     <hgroup className="header-group">
//       <module_nav/>
//       <div className="nav-buttons">
//         <a href="#/dashboard"><button>DASHBOARD</button></a>
//         <a href="#/routes"><button>ROUTES</button></a>
//         <a href="#/find_friends"><button>FIND FRIENDS</button></a>
//       </div>
//       <div className="user-info">
//         <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
//         <button className="header-button" onClick={this.props.logout}>Log Out</button>
//       </div>
//   </hgroup>
//   )
// };

  render(){
    if (this.props.currentUser){
      return(
      <hgroup className="header-group">
        <module_nav/>
        <div className="nav-buttons">
          <a href="#/dashboard"><button>DASHBOARD</button></a>
          <a href="#/routes"><button>ROUTES</button></a>
          <a href="#/find_friends"><button>FIND FRIENDS</button></a>
        </div>
        <div className="user-info">
          <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </div>
    </hgroup>
    )
    } else {
      return (
      <nav className="no-current-user">
        <div className="signup-login">
        <a href="#/login"><button>LOG IN</button></a>
        <a href="#/signup"><button>SIGN UP</button></a>
        </div>
      </nav>
      )
    }
  }

// const sessionLinks = () => (
//   <nav className="no-current-user">
//     <div className="signup-login">
//     <a href="#/login"><button>LOG IN</button></a>
//     <a href="#/signup"><button>SIGN UP</button></a>
//     </div>
//   </nav>
// );

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <module_nav/>
//     <div className="nav-buttons">
//       <a href="#/dashboard"><button>DASHBOARD</button></a>
//       <a href="#/routes"><button>ROUTES</button></a>
//       <a href="#/find_friends"><button>FIND FRIENDS</button></a>
//     </div>
//     <div className="user-info">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </div>
// </hgroup>
// );
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

}

export default withRouter(Greeting);

    // <Link to="/login" activeClassName="current">Login</Link>
// &nbsp;or&nbsp;
  // <Link to="/signup" activeClassName="current">Sign up!</Link>
