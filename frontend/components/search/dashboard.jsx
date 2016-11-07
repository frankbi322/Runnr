import React from 'react';
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
      <div className="dashboard">
      <div className="left-half">
        <RouteMap/>
        </div>
        <div className="right-half">
        <RoutesIndex routes={this.state.routes} requestSingleRoute={this.props.requestSingleRoute}/>
      </div>
      </div>
    );
  }

}

export default Dashboard;
