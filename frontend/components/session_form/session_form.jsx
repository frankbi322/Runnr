import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	demoLogin(){
		this.username="guest";
		this.password="password";
	}

	startDemo(){

	}


	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user;
		if (e.currentTarget.className.includes("guest")) {
			user = {username: "guest", password: "password"};
		} else {
		user = this.state;
		}
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let guestlogin;
		if (this.props.formType === "login") {
		guestlogin = <button className="auth-button guest" onClick={this.handleSubmit}>Guest Login</button>;
	} else {
		guestlogin = "";
	}
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to RunR!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
				<br/>
				{guestlogin}
			</div>
		);
	}

}

export default withRouter(SessionForm);
