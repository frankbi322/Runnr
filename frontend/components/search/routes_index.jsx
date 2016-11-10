import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router';



const RoutesIndex = ({routes, updateUser}) => (
  <div className="routes-index">
    {routes.map(route => (
      <RouteIndexItem route={route} updateUser={updateUser} key={route.id}/>
    ))}
    <Link to="/routes/new"> Create New Route! </Link>
  </div>
);

export default RoutesIndex;
