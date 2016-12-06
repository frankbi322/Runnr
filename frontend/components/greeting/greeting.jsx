
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
        <div className="splash-image-container">
        <div id="bg">
          <img src="http://res.cloudinary.com/frankbi322/image/upload/c_limit,h_800,w_1200/v1478893566/photo-1427384906349-30452365b5e8_nq6u6z.jpg"></img>
        </div>
        <nav className="no-current-user">
          <div className="signup-login">
            <a href="#/login"><button>LOG IN</button></a>
            <a href="#/signup"><button>SIGN UP</button></a>
          </div>
        </nav>
      </div>
    );
    }
  }

}

export default withRouter(Greeting);
