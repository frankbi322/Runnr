import React from 'react';

class DetailMap extends React.Component {
  constructor(props){
    super(props);
    this.initialize = this.initialize.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    this.makeRoute = this.makeRoute.bind(this);
  }
  componentDidMount(){
    this.initialize();
  }

  placeMarker(position, map) {
    let marker = new google.maps.Marker({
      position: position,
      geodesic: true,
      map: map
    });
  }

  makeRoute(coords, map) {

      var path = new google.maps.Polyline({
        path: coords,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      path.setMap(map);
  }

  initialize() {
    const geocoder = new google.maps.Geocoder();
    const mapDOMNode = this.refs.detail_map;
    const coords = [];

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 14
    };
    this.map = new google.maps.Map(mapDOMNode,mapOptions);

    // const parsedcoords = this.props.route.coordinates;
    // for (let i = 0; i < parsedcoords.length-2; i+=2) {
    //   let lat = parseFloat(parsedcoords[i]);
    //   let lng = parseFloat(parsedcoords[i+1]);
    //   let latlng = new google.maps.LatLng(lat,lng);
    //   coords.concat([latlng]);
    //   this.placeMarker(latlng,this.map);
    // this.makeRoute(coords,this.map);
    // }



    this.props.route.coordinates.forEach( coord => {
      for (let i = 0; i < coord.length - 2; i+=2) {
      let lat = parseFloat(coord.split(",")[i]);
      let lng = parseFloat(coord.split(",")[i+1]);
      let latlng = new google.maps.LatLng(lat,lng);
      coords.concat([{latlng}]);
      this.placeMarker(latlng,this.map);
      this.makeRoute(coords,this.map);
    }
    });
  }

  render() {
    return (
      <div className="static-map" ref="detail_map">Map</div>
    );
  }
}

export default DetailMap;
