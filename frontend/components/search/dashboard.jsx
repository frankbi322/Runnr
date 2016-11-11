import React from 'react';
import ModuleNavigator from '../nav/module_nav';
import RoutesIndex from './routes_index';
import IndexMap from '../index_map/index_map';
import {Link} from 'react-router';
import UserProfile from '../profile/profile';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    routes: []
  };
  }

  componentDidMount() {
    this.props.requestRoutes();
  }

  componentWillReceiveProps(newProps) {
    const filteredRoutes=[];
    for (let routeId in newProps.routes) {
      if (newProps.routes[routeId].author_id===this.props.currentUser.id) {
        filteredRoutes.push(newProps.routes[routeId]);
      }
    }
    this.setState({routes: filteredRoutes});
  }


  render() {
    return (
      <div>

        <div className="dashboard">

          <UserProfile currentUser={this.props.currentUser}/>

            <IndexMap maproutes={this.state.routes} updateBounds={this.props.updateBounds}/>


          <h2 className="h2">My Routes</h2>
          <RoutesIndex routes={this.state.routes} updateUser={this.props.updateUser} requestSingleRoute={this.props.requestSingleRoute}/>
          <a href="#/routes/new"><button>Create New Route! </button></a>
        </div>
      </div>
    );
  }

}

export default Dashboard;

        // <ModuleNavigator path="/dashboard"/>
