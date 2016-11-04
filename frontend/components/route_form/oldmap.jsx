import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router';
import MarkerManager from '../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class NewMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
      totalDistance: 0,
      name: "",
      description:"",
      polyline:""
    };
  this.placeMarker = this.placeMarker.bind(this);
  this.makeRoute = this.makeRoute.bind(this);
  this.initialize = this.initialize.bind(this);
  this.calculateDistance = this.calculateDistance.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this);
  this.update = this.update.bind(this);
  this.returnToIndex = this.returnToIndex.bind(this);
  this.resetPoints = this.resetPoints.bind(this);
  }

  initMap(){
    var map = new google.maps.M
  }


  componentDidMount(){
    this.waypoints = [];
    this.ways = [];
    this.previous = null;
    this.current = null;

  }


  calculateDistance(){
    if (this.prev) {
      const origin = this.prev.split(", ");
      const destination = this.current.split(", ");
      const originCoords = new google.maps.LatLng(
        parseFloat(origin[0]),
        parseFloat(origin[1])
      );
      const destinationCoords = new google.maps.LatLng(
        parseFloat(destination[0]),
        parseFloat(destination[1])
      );

      let service = new google.maps.DistanceMatrixService();

      const thisMap = this;

      const callback = (response,status) => {
        let distance;
        if (status=== 'OK') {
          distance = response.rows[0].elements[0].distance.value / 1609.34;
        } else {
          distance = 0;
        }
        thisMap.setState({totalDistance: thisMap.state.totalDistance+distance});
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const route = {
      name: this.state.name,
      description: this.state.description,
      author_id: this.props.currentUser.id,
      distance: this.state.totalDistance,
      coordinates: this.state.coords,
      polyline: this.state.polyline
    };
    this.props.createRoute({route});
    this.props.router.push('/');
  }





  componentDidUpdate() {
    if(this.props.singleRoute){
      this.MarkerManager.updateMarkers([this.props.routes[Object.keys(this.props.routes)[0]]]); //grabs only that one route
    } else {
      this.MarkerManager.updateMarkers(this.props.routes);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }


    _handleMarkerClick(route) {
      this.props.router.push(`routes/${route.id}`);
    }

    _handleClick(coords) {
      this.props.router.push({
        pathname: "routes/new"
      });
    }

    makeRoute(waypoints,ways,map) {
      let start = waypoints[0].location;
      let end = waypoints[waypoints.length-1].location;
      if (waypoints.length>1) {
        let request = {
          origin: start,
          destination: end,
          waypoints: ways
        };
      }
      const thisMap = this;




    }

  render(){
    return (
      <div className="map-container">
      <div className="map" ref="map">Map</div>

      <div className="route-details">
        <form className="route-form" onSubmit={this.handleSubmit}>
          <label>New Route: <br />
            <input type="text" value={this.state.name} onChange={this.update("name")}/>
          </label>

          <label>Description: <br/>
            <textarea value={this.state.description} onChange={this.update("description")}/>
          </label>

          <div>
            <button className="create-route-form">Create Route!</button>
            <button onClick={this.resetPoints}>Reset Points</button>
          </div>

        </form>
          <div>
            <label>Total Route Distance:</label>
            <span>{this.state.totalDistance}</span>
          </div>
      </div>
      </div>
    );
  }
}

export default withRouter(NewMap);
