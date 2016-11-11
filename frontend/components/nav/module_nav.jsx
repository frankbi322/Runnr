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
          <a href="#/dashboard"><button>DASHBOARD</button></a>
        </div>

        <div className={this.props.path === "/routes" ? "module-selected" : "module-unselected"}>
          <a href="#/routes"><button>ROUTES</button></a>
        </div>

        <div className={this.props.path === "/friends" ? "module-selected" : "module-unselected"}>
          <a href="#/find_friends"><button>FIND FRIENDS</button></a>
        </div>
      </nav>
    );
  }
}

export default ModuleNavigator;
