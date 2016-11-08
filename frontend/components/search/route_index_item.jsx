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
    let coordsParam = "";
    this.props.route.coordinates.forEach( (coord) => {
      coordsParam = coordsParam + "|" + coord;
    });




    return (
      <div className="item-container" onClick={this.handleClick}>
          <img className="index-img" src={this.props.route.map_url}/>
          <div> {this.props.route.name}</div>
          <div className="route-index-item-details">
            Name: {name}
            Created By: {this.props.route.author_name}
          </div>
          <div className="distance_box">
              <h4>Distance: </h4>
              {this.props.route.distance.toFixed(2)} miles
          </div>
      </div>
    );
  }
}

export default RouteIndexItem;
