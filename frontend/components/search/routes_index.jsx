import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router';



const RoutesIndex = ({routes}) => (
  <div className="item-container">
    <h1>Routes:</h1>
    {routes.map(route => (
      <RouteIndexItem route={route} key={route.id}/>
    ))}
    <Link to="/routes/new"> Create New Route! </Link>
  </div>
);

export default RoutesIndex;
