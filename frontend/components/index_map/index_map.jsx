import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class RouteMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singleRoute) {
      this.props.requestSingleRoute(this.props.routeId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.routes);
    }
  }

  // componentDidUpdate() {
  //   if(this.props.singleRoute){
  //     this.MarkerManager.updateMarkers([this.props.routes[Object.keys(this.props.routes)[0]]]); //grabs only that one route
  //   } else {
  //     this.MarkerManager.updateMarkers(this.props.routes);
  //   }
  // }

  _registerListeners() {
    // google.maps.event.addListener(this.map, 'idle', () => {
    //   const { north, south, east, west } = this.map.getBounds().toJSON();
    //   const bounds = {
    //     northEast: { lat:north, lng: east },
    //     southWest: { lat: south, lng: west } };
    //   this.props.updateFilter('bounds', bounds);
    // });
    // google.maps.event.addListener(this.map, 'click', event => {
      // const coords = _getCoordsObj(event.latLng);
    //   this._handleClick();
    // });
  }


  _handleMarkerClick(route) {
    this.props.router.push(`routes/${route.id}`);
  }

  _handleClick() {
    this.props.router.push({
      pathname: "routes/new"
    });
  }

  render() {
    return <div className="static-map" ref="map">Map</div>;
  }
}

export default withRouter(RouteMap);
