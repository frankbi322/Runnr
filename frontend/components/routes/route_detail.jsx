import React from 'react';
import { Link } from 'react-router';
import DetailMap from './detail_map';
import CommentShow from './comment_show';
import CommentButton from './comment_button';
import CommentsList from './comments_list';
import CommentFormContainer from './comment_form_container';

const commentList = (comments=[]) => (
  comments.map(comment => (
    <CommentShow body={comment.body} key={comment.id}/>
  ))
);

class RouteDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.routes[this.props.params.routeId];
  }



  render() {
    if (Object.keys(this.props.routes).length === 0) {
      return(<div>Loading</div>);
    }
    const route = this.props.routes[this.props.params.routeId];

    console.log(route);
    return (
      <div>

        <br/>
        <div className="route-detail">
          <img className="image-show"src={route.map_url}/>
          Name: {route.name}
          <br/>
          Distance: {route.distance.toFixed(2)} miles
          <br/>
          Created By: {route.author_name}
          <br/>
          Description: {route.description}
          <br/>
          Comments:
          {commentList(route.comments)}
          <br/>
          <CommentButton/>
          {this.props.children}

          <Link to="/dashboard">Back to Index</Link>

        </div>

      </div>
    );
  }
}

export default RouteDetail;

// <CommentsList comments={this.props.route.comments}/>
// <CommentFormContainer route={this.props.route}/>
// <div className="map-container">
//   <DetailMap route={route}/>
// </div>
