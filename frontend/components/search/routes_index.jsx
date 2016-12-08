import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router';
import {Table,Column,Cell} from 'fixed-data-table';



const RoutesIndex = ({routes, updateUser}) => (
  <section className="table-container">
    <table>
      <tbody>
    {routes.map(route => (
      <RouteIndexItem route={route} updateUser={updateUser} key={route.id}/>
    ))}
    </tbody>
    </table>
  </section>
);

export default RoutesIndex;
