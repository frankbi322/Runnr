import React from 'react';

import RoutesIndex from './routes_index';
import RouteMap from '../index_map/index_map';

const Search = ({ routes = [] }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Route!</h5>
      <RouteMap className="static-map"
        routes={routes}
        singleRoute={false} />
    </div>
    <div className="right-half">

      <RoutesIndex routes={routes} />
    </div>
  </div>
);

export default Search;
