import React from 'react';
import {Link} from 'react-router';

class ModuleNavigator extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="nav">
        <div className={this.props.path === "/dashboard" ? "module-selected" : "module-unselected"}>
          <Link to="/dashboard">DASHBOARD</Link>
        </div>

        <div className={this.props.path === "/routes" ? "module-selected" : "module-unselected"}>
          <Link to="/routes">ALL ROUTES</Link>
        </div>

        <div className={this.props.path === "/friends" ? "module-selected" : "module-unselected"}>
          <Link to="/find_friends">FRIENDS</Link>
        </div>
      </nav>
    );
  }
}

export default ModuleNavigator;
