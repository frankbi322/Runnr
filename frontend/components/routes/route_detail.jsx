import React from 'react';
import { Link } from 'react-router';
 //comment here;

const RouteDetail = ({ route }) => (
  <div>
    <ul className="route-list">
      <img className="index-image" />
      // <li>Rating: {route.average_rating || "No reviews yet"}</li>
      // <li>Description: {route.description}</li>
      // <li>Seats: {route.seating}</li>
      <li>Latitude: {route.lat}</li>
      <li>Longitude: {route.lng}</li>
    </ul>
    <br/>
    <div className="reviews">
      <h3>Reviews</h3>
    </div>
  </div>
);

export default RouteDetail;
