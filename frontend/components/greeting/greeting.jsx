
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
      <header id="header">
        <div className="container">
        <module_nav/>
        <nav className="nav-buttons">

            <Link  to="/" className="header-link"><img className="logo" src="http://res.cloudinary.com/frankbi322/image/upload/c_scale,h_80/v1481563432/Screen_Shot_2016-11-11_at_3_ajhnkd.png"></img></Link>


        <div className="signup-login">
          <ul>
            <li><a href="#/dashboard">DASHBOARD</a></li>
            <li><a href="#/routes">ROUTES</a></li>
            <li><a href="#/find_friends">FIND FRIENDS</a></li>
          </ul>
        </div>
        <div className="user-info">
          <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
          <div className="logout-button">
            <a onClick={this.props.logout}>Log Out</a>
          </div>
      </div>
        </nav>
      </div>
    </header>
    )
    } else {
      return (
        <header id="header" className="splash-image-container">
        <div id="bg">
          <img src="http://res.cloudinary.com/frankbi322/image/upload/c_limit,h_800,w_1200/v1478893566/photo-1427384906349-30452365b5e8_nq6u6z.jpg"></img>
        </div>
        <div className="container">
        <nav className="no-current-user">
          <div className="logo-container">
            <Link  to="/" className="header-link"><img className="logo" src="http://res.cloudinary.com/frankbi322/image/upload/c_scale,h_80/v1481563432/Screen_Shot_2016-11-11_at_3_ajhnkd.png"></img></Link>

            <div className="signup-login">
              <ul>
                <li className="nav-item"><a href="#/login">LOG IN</a></li>
                <li className="nav-item"><a href="#/signup">SIGN UP</a></li>
              </ul>
            </div>
        </div>

        </nav>
      </div>
      </header>
    );
    }
  }

}

export default withRouter(Greeting);

          // <Link  to="/" className="header-link"><img className="logo" src="http://res.cloudinary.com/frankbi322/image/upload/v1478906064/Screen_Shot_2016-11-11_at_3.12.36_PM_fbd0hh.png"></img></Link>

                    // <Link  to="/" className="header-link"><img className="logo" src="http://res.cloudinary.com/frankbi322/image/upload/v1478906064/Screen_Shot_2016-11-11_at_3.12.36_PM_fbd0hh.png"></img></Link>
