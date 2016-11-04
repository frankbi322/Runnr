import React from 'react';
import AppMap from './map';
import {withRouter} from 'react-router';

class CreateRouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.returnToIndex=this.returnToIndex.bind(this);
  }

  returnToIndex(){
    this.props.router.push('/');
  }

  render() {
    return (
      <div>
        <div className="border"></div>
        <AppMap
          currentUser={this.props.currentUser}
          createRoute={this.props.createRoute} />
        <button onClick={this.returnToIndex}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(CreateRouteForm);
