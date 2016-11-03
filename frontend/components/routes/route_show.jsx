import React from 'react';
import { Link } from 'react-router';

import RouteDetail from './route_detail';
import RouteMap from '../map';


const RouteShow = ({ route, routeId, requestSingleRoute, children }) => {
  const routes = {
    [routeId]: route
  };

  return(
    <div className="single-route-show">
      <div className="single-route-map">
        <Link to="/">Back to Routes Index</Link>
        <RouteMap
          routes={routes}
          routeId={routeId}
          singleRoute={true}
          requestSingleRoute={requestSingleRoute}
          />
      </div>
      <div className="right-half route-details">
        <RouteDetail route={route} />
        {children}
          // || <ReviewButton routeId={routeId} />}
      </div>
    </div>
  );
};

export default RouteShow;
