import React from 'react';

import CommentsListItem from './comment_list_item';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const commentsList = this.props.comments.map((comment,index) => {
      return <CommentsListItem key={comment.id} comment={comment} />;
    });
    return (
      <ul className="commentsList">{commentsList}</ul>
    );
  }
}

export default CommentsList;
