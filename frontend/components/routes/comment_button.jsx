import React from 'react';
import {withRouter} from 'react-router';

class CommentButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const routeId = this.props.params.routeId;
    const url = `/routes/${routeId}/comment`;
    this.props.router.push(url);
  }
  render() {
    return (
      <button className="comment-button" onClick={this.handleClick}>
        Leave Comment
      </button>
    );
  }
}

export default withRouter(CommentButton);
