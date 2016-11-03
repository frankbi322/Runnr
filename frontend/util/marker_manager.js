
export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromRoute = this._createMarkerFromRoute.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(routes){
    this.routes = routes;
    this._routesToAdd().forEach(this._createMarkerFromRoute);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _routesToAdd() {
    const currentRoutes = this.markers.map( marker => marker.routeId );
    return this.routes.filter( route => !currentRoutes.includes(route.id) );
  }

  _markersToRemove(){
    const routeIds = this.routes.map( route => route.id );
    return this.markers.filter( marker => !routeIds.includes(marker.routeId) );
  }

  _createMarkerFromRoute(route) {
    const pos = new google.maps.LatLng(route.lat, route.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      routeId: route.id
    });
    marker.addListener('click', () => this.handleClick(route));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
