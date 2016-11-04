import React from 'react';
import { withRouter } from 'react-router';

class AppMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: [],
      totalDistance: 0,
      name: "",
      description: "",
      polyline: ""
    };

    this.placeMarker = this.placeMarker.bind(this);
    this.makeRoute = this.makeRoute.bind(this);
    this.initialize = this.initialize.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.clearPoints = this.clearPoints.bind(this);

    this._destroyDirections = this._destroyDirections.bind(this);
  }

  componentDidMount() {
    this.waypts = [];
    this.ways = [];
    this.prev = null;
    this.current = null;

    this.initialize();

    // let $directions = document.getElementById('map-container-span');
    //
    // window.onmousemove = (event) => {
    //   let x = event.clientX;
    //   let y = event.clientY;
    //
    //   $directions.style.top = (y + 20) + 'px';
    //   $directions.style.left = (x + 20) + 'px';
    // };
  }

  placeMarker(position, map) {
    let marker = new google.maps.Marker({
      position: position,
      draggable: true,
      map: map
    });
    this.state.coords.concat(position);
    this.waypts.push(marker);
  }

  makeRoute(coords, map) {

      var path = new google.maps.Polyline({
        path: this.state.coords,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      path.setMap(map);
  }

  initialize() {
    const geocoder = new google.maps.Geocoder();
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 14
    };

    this.map = new google.maps.Map(mapDOMNode,mapOptions);


    this.map.addListener('click',(e) => {
      this.placeMarker(e.latLng,this.map);
    });
  }

  calculateDistance() {
    if (this.prev) {
      const origin = this.prev.split(", ");
      const destination = this.current.split(", ");
      const originLatLng = new google.maps.LatLng(
        parseFloat(origin[0]),
        parseFloat(origin[1])
      );
      const destinationLatLng = new google.maps.LatLng(
        parseFloat(destination[0]),
        parseFloat(destination[1])
      );

      let service = new google.maps.DistanceMatrixService();

      const thisMap = this;

      const callback = (response, status) => {
        let distance;
        if (status === 'OK') {
          distance = response.rows[0].elements[0].distance.value / 1609.34;
        } else {
          distance = 0;
        }
        thisMap.setState({totalDistance: thisMap.state.totalDistance + distance});
      };

      service.getDistanceMatrix({
        origins: [originLatLng],
        destinations: [destinationLatLng],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }, callback);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
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

  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  navigateToIndex() {
    this.props.router.push("/");
  }

  clearPoints(event) {
    event.preventDefault();

    this.waypts = [];
    this.ways = [];
    this.prev = null;
    this.current = null;

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
              <button className="create-route-form">
                Create Route
              </button>
              <button className="clear-points" onClick={this.clearPoints}>
                Clear Points
              </button>
              <button onClick={this.returnToIndex}>Cancel</button>
            </div>
          </form>
          <div className="distance-container">
          <label className="distance-label">Distance: </label>
          <div className="distance">
            <span>{ this.state.totalDistance.toFixed(2) }</span> mi
          </div>
        </div>
        </div>
      </section>
    );
  }

}

export default withRouter(AppMap);
