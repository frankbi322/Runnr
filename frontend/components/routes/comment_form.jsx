import React from 'react';
import {withRouter} from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnToRoute = this.returnToRoute.bind(this);
  }

  returnToRoute() {
    this.props.router.push(`/routes/${this.props.params.routeId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const routeId = parseInt(this.props.params.routeId);
    const authorId = this.props.currentUser.id;
    const comment = Object.assign({},this.state,{
      route_id: routeId,
      author_id: authorId
    });
    this.props.createComment({comment});
    this.setState({
      body: ""
    })
    this.returnToRoute();
  }

  update(property) {
    return e => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={this.state.body}
            onChange={this.update("body")}></textarea>
          <br/>
          <input className="button" type="submit" value="Leave Comment"></input>
        </form>
        <button onClick={this.returnToRoute}>Cancel</button>
      </div>
    );
  }

}

export default withRouter(CommentForm);
