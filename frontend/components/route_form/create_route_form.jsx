import React from 'react';
import AppMap from './map';
import {withRouter} from 'react-router';

class CreateRouteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="border"></div>
        <AppMap
          currentUser={this.props.currentUser}
          createRoute={this.props.createRoute} />
      </div>
    );
  }
}

export default withRouter(CreateRouteForm);
