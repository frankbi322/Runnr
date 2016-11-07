import React from 'react';

class CommentsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="comments-list-item">
        <div className="comment-info">
          <span>{this.props.comment.author_name}</span>
          <br/>
          {this.props.comment.body}
        </div>
      </li>
    );
  }
}


export default CommentsListItem;
