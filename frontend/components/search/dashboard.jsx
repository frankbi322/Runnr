import React from 'react';
import ModuleNavigator from '../nav/module_nav';
import RoutesIndex from './routes_index';
import IndexMap from '../index_map/index_map';
import {Link} from 'react-router';


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
    debugger;
    return (
      <div className="dashboard">
        <ModuleNavigator path="/dashboard"/>
        <IndexMap routes={this.state.routes}/>
        <h2 className="h2">My Routes</h2>
        <RoutesIndex routes={this.state.routes} requestSingleRoute={this.props.requestSingleRoute}/>

      </div>
    );
  }

}

export default Dashboard;
