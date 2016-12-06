import React from 'react';

const Comment = ({author_name,body}) => (
  <div className="comment-container">
    <ul>
      <li>{author_name}: {body}</li>
    </ul>
  </div>
);

export default Comment;
