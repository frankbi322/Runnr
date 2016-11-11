import React from 'react';
import {withRouter} from 'react-router';
import RoutesIndex from './routes_index';
import ModuleNavigator from '../nav/module_nav';
import IndexMap from '../index_map/index_map';

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
        <div className="search">

          <IndexMap className="static-map" maproutes={this.props.routes} updateBounds={this.props.updateBounds}/>
          <h2>All Routes</h2>
          <RoutesIndex routes={this.props.routes} updateUser={this.props.updateUser} requestSingleRoute={this.props.requestSingleRoute}/>
          <button onClick={this.returnToDashboard}>Return to Dashboard</button>
        </div>
      </div>
  );
  }
}


export default Search;

// const Search = ({ routes }) => (
//   <div className="search">
//     <ModuleNavigator path="/routes"/>
//       <IndexMap className="static-map"
//         routes={routes}
//          />
//       <h2>All Routes</h2>
//       <RoutesIndex routes={routes} />
//   </div>
// );



// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.returnToDashboard = this.returnToDashboard.bind(this);
//   }
//
//   // componentDidMount(){
//   //   this.props.requestRoutes();
//   // }
//
//   returnToDashboard(){
//     this.props.router.push('/dashboard');
//   }
//
//   render() {
//     return (
//       <div className="search">
//         <ModuleNavigator path="/routes"/>
//         <IndexMap className="static-map" routes={this.props.routes} singleRoute={false}/>
//         <h2>All Routes</h2>
//         <RoutesIndex routes={this.props.routes} requestSingleRoute={this.props.requestSingleRoute}/>
//         <button onClick={this.returnToDashboard}>Return to Dashboard</button>
//       </div>
//   );
//   }
// }

// const Search = ({ routes }) => (
//   <div className="search">
//     <ModuleNavigator path="/routes"/>
//     <IndexMap className="static-map"
//         routes={routes}
//          />
//        <h2>All Routes</h2>
//       <RoutesIndex routes={routes} />
//   </div>
// );
