import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router';



const RoutesIndex = ({routes, updateUser}) => (
  <div className="routes-index">
    {routes.map(route => (
      <RouteIndexItem route={route} updateUser={updateUser} key={route.id}/>
    ))}

  </div>
);

export default RoutesIndex;
