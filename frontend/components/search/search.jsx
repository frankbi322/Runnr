import React from 'react';
import {withRouter} from 'react-router';
import RoutesIndex from './routes_index';
import ModuleNavigator from '../nav/module_nav';
import RouteMap from '../index_map/index_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.returnToDashboard = this.returnToDashboard.bind(this);
  }

  componentDidMount(){
    this.props.requestRoutes();
  }

  returnToDashboard(){
    this.props.router.push('/dashboard');
  }

  render() {
    return (
      <div>
        <ModuleNavigator path="/routes"/>
        <div>
          <RouteMap className="static-map" routes={this.props.routes} singleRoute={false}/>
        </div>
        <br/>
        <div className="right-half">
          <h2>All Routes</h2>
          <RoutesIndex routes={this.props.routes} requestSingleRoute={this.props.requestSingleRoute}/>
          <button onClick={this.returnToDashboard}>Return to Dashboard</button>
        </div>
      </div>
  );
  }
}

export default Search;



// const Search = ({ routes }) => (
//   <div className="user-pane">
//     <div className="left-half">
//       <RouteMap className="static-map"
//         routes={routes}
//         singleRoute={false} />
//     </div>
//     <div className="right-half">
//
//       <RoutesIndex routes={routes} />
//     </div>
//   </div>
// );
