import React from 'react';
import {hashHistory} from 'react-router';


class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    const routeId = this.props.route.id;
    hashHistory.push(`routes/${routeId}`);
  }

  render(){
    const {name} = this.props.route;
    return (
      <div className="item-container" onClick={this.handleClick}>
        <div>
          <span>Name</span>
          <p>{this.props.route.name}
            <br/>
            {this.props.route.distance} miles
          </p>
          <span>{name}</span>
        </div>

      </div>
    );
  }
}

export default RouteIndexItem;
