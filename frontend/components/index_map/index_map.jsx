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
  zoom: 12
};

class IndexMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleMarkerClick = this._handleMarkerClick.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.maproutes);


  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.maproutes);
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
