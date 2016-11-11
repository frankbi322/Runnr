import React from 'react';
import {hashHistory} from 'react-router';


class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.route;
    this.handleClick=this.handleClick.bind(this);
    this.handleComplete=this.handleComplete.bind(this);
  }

  handleClick(){
    const routeId = this.props.route.id;
    hashHistory.push(`routes/${routeId}`);
  }

  handleComplete(e){
    e.preventDefault();
    this.props.updateUser(this.state)

  }

  render(){
    // let coordsParam = "";
    // this.props.route.coordinates.forEach( (coord) => {
    //   coordsParam = coordsParam + "|" + coord;
    // });




    return (
      <div className="item-container" onClick={this.handleClick}>
          <img className="index-img" src={this.props.route.map_url}/>
          <div className="route-index-item-details">
            <h4 className="">Name: {this.props.route.name}</h4>
            <br/>
            <h4>Created By: {this.props.route.author_name}</h4>
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
