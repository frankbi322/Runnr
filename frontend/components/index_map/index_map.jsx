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

class IndexMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleMarkerClick = this._handleMarkerClick.bind(this);
  }

  componentDidMount() {
    // debugger;
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.maproutes);

    // google.maps.event.addListener(this.map,'idle',()=> {
    //   let bounds = this.map.getBounds();
    //   let ne = { "lat": bounds.getNorthEast().lat(), "lng": bounds.getNorthEast().lng() }
    //   let sw = { "lat": bounds.getSouthWest().lat(), "lng": bounds.getSouthWest().lng() }
    //   this.props.updateBounds({
    //     "northEast":ne,
    //     "southWest":sw
    //   });
    // });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.maproutes);
  }

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



  render() {
    return (
      <div className="map-container">
        <div className="static-map" ref="map">Map</div>
      </div>
    );
  }
}

export default withRouter(IndexMap);
