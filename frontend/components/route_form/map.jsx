import React from 'react';
import { withRouter } from 'react-router';
import CircularJSON from 'circular-json';

const mapOptions = {
  center: {lat: 37.7758, lng: -122.435},
  zoom: 14
};

class AppMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: [],
      waypoints: [],
      totalDistance: 0,
      name: "",
      description: "",
    };

    this.placeMarker = this.placeMarker.bind(this);
    this.makeRoute = this.makeRoute.bind(this);
    this.initialize = this.initialize.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.returnToIndex = this.returnToIndex.bind(this);
    this.clearPoints = this.clearPoints.bind(this);

    this._destroyDirections = this._destroyDirections.bind(this);
  }

  componentDidMount() {
    this.markers = [];
    this.prev = null;
    this.current = null;

    this.initialize();

  }

  placeMarker(position, map) {
    let marker = new google.maps.Marker({
      position: position,
      geodesic: true,
      // draggable: true,
      map: map
    });
    this.markers.push(marker);
  }

  makeRoute(coords, map) {

      var path = new google.maps.Polyline({
        path: this.state.coords,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      path.setMap(map);

      this.setState({polyline: path});
      if (this.state.coords.length>=2) {
        let polyLengthInMeters = google.maps.geometry.spherical.computeLength(path.getPath().getArray());
        this.calculateDistance(polyLengthInMeters);
    }
  }

  initialize() {
    const geocoder = new google.maps.Geocoder();
    const mapDOMNode = this.refs.map;



    this.map = new google.maps.Map(mapDOMNode,mapOptions);

    let that=this;
    this.map.addListener('click',(e) => {
      this.placeMarker(e.latLng,this.map);
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const newCoord = {lat,lng};
      that.setState({coords: that.state.coords.concat([newCoord])});
      // console.log(that.state.coords);
      // console.log(this.waypoints);
      this.makeRoute(this.state.coords,this.map);
      // this.calculateDistance();
    });

  }

  calculateDistance(meters){
    let distance = meters / 1609.34;

  // console.log(distance);
  this.setState({totalDistance:distance});
}

  handleSubmit(event) {
    event.preventDefault();
    let temp = this.state.coords.map(obj => {
      return Object.keys(obj).map(arg => {
        return obj[arg];
      });
    });
    let coords = [temp.toString()];

    let staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap";
    // staticMapUrl +="?center="+mapOptions.G + "," + mapOptions.center.K;
    staticMapUrl += "?size=500x500";
    staticMapUrl += "&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI";
    // staticMapUrl += mapOptions.zoom;
    for (var i = 0; i < this.state.coords.length; i++) {
      staticMapUrl += "&markers=color:red|" + this.state.coords[i].lat.toString() + "," + this.state.coords[i].lng.toString();
    }
    staticMapUrl += "&path=";
    for (var i = 0; i < this.state.coords.length; i++) {
      staticMapUrl += this.state.coords[i].lat.toString() + "," + this.state.coords[i].lng.toString() + '|';
    }
    let mapUrl = staticMapUrl.slice(0,-1);



    const route = {
      name: this.state.name,
      description: this.state.description,
      author_id: this.props.currentUser.id,
      distance: this.state.totalDistance,
      coordinates: coords,
      map_url: mapUrl
    };

    this.props.createRoute({route});
    this.props.router.push('/');
  }

  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  returnToIndex(e) {
    e.preventDefault();
    this.props.router.push("/dashboard");
  }

  clearPoints(event) {
    event.preventDefault();

    this.setState({totalDistance: 0, coords: []});
    this.initialize();
  }

  _destroyDirections(event) {
    const $directions = document.getElementById("map-container-span");
    $directions.remove();
  }

  render() {

    return (
      <section className="map-data-container">
        <div id="map-container" ref="map"></div>
        <div className="route-details">
          <form className="route-form" onSubmit={this.handleSubmit}>
            <label className="name-label">Route Name: <br />
              <input
                type="text"
                value={this.state.name}
                placeholder="Name of route"
                onChange={this.update("name")} />
            </label>

            <label className="description-label">Description: <br />
              <textarea
                value={this.state.description}
                placeholder="Describe this route!"
                onChange={this.update("description")}></textarea>
            </label>
            <div>
              <button className="route-form-button">
                Create Route
              </button>
              <button className="route-form-button" onClick={this.clearPoints}>
                Clear Points
              </button>
              <button className="route-form-button" onClick={this.returnToIndex}>Cancel</button>
            </div>
            <div className="distance-container">
            <label className="distance-label">Distance: </label>
            <div className="distance">
              <span>{ this.state.totalDistance.toFixed(2) }</span> mi
            </div>
          </div>
          </form>

        </div>
      </section>
    );
  }

}

export default withRouter(AppMap);
