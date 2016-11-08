import React from 'react';
import ModuleNavigator from '../nav/module_nav';
import RoutesIndex from './routes_index';
import RouteMap from '../index_map/index_map';


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
        <ModuleNavigator path="/dashboard"/>
      <div className="dashboard">
        
      <div className="left-half">
        <RouteMap/>
        </div>
        <div className="right-half">
          <h3>My Routes</h3>
        <RoutesIndex routes={this.state.routes} requestSingleRoute={this.props.requestSingleRoute}/>
      </div>
      </div>
      </div>
    );
  }

}

export default Dashboard;
