import React from 'react';
import RouteIndexItem from './route_index_item';

const RoutesIndex = ({routes}) => (
  <div>
    <h1>Routes:</h1>
    {routes.map(route => (
      <RouteIndexItem route={route} key={route.id}/>
    ))}
  </div>
);

export default RoutesIndex;
