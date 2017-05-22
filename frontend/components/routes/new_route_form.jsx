import React from 'react';
import {withRouter} from 'react-router';

class RouteForm extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      name: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.returnToIndex=this.returnToIndex.bind(this);
  }

  returnToIndex(e){
    e.preventDefault();
    this.props.router.push("/dashboard");
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const route = Object.assign({},this.state);
    this.props.createRoute({route});
    this.returnToIndex();
  }

  render(){
    const {name} = this.state;
    const {lat,lng} = this.coords;
    return (
      <div>
        <h3>Create New Route!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={this.update("name")}/>
          <input type="submit" value="Create Route!"/>
        </form>
          <Link to="/dashboard">Cancel</Link>
      </div>
    );
  }
}

export default withRouter(RouteForm);
