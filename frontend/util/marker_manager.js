
export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];

    this._createMarkerFromRoute = this._createMarkerFromRoute.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(routes){
    // this.routes = this._routesToArray(routes);
    // let routesToCreate = this._routesToAdd();
    // routesToCreate.forEach(this._createMarkerFromRoute);
    // let routesToRemove = this._markersToRemove();
    // routesToRemove.forEach(this._removeMarker);
  }

  _routesToAdd() {
    const currentRoutes = this.markers.map( marker => marker.routeId );
    return this.routes.filter( route => !currentRoutes.includes(route.id) );
  }

  _markersToRemove(){
    const currentRoutes = this.routes.map( route => route.id );
    return this.markers.filter( marker => !currentRoutes.includes(marker.routeId) );
  }

  _createMarkerFromRoute(routeitem) {
    routeitem.coordinates.forEach( coord => {
      let coordlat = parseFloat(coord.split(",")[0]);
      let coordlng = parseFloat(coord.split(",")[1]);
      let pos = new google.maps.LatLng(coordlat,coordlng);
      const marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        routeId: route.id
      });
      marker.addListener('click', () => this.handleClick(route));
      this.markers.push(marker);
    });
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  _routesToArray(routes) {
    if (!routes) {return []};
    return Object.keys(routes).map(key => routes[key]);
  }
}
