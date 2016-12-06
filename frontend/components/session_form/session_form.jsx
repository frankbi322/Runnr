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
		this.username="Guest";
		this.password="password";
	}

	startDemo(){

	}


	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/dashboard");
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
			user = {username: "Guest", password: "password"};
		} else {
		user = this.state;
		}
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "/login") {
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
		if (this.props.formType === "/login") {
		guestlogin = <button className="guest" onClick={this.handleSubmit}>Guest Login</button>;
	} else {
		guestlogin = "";
	}
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<span className="auth-span">Welcome to RunnR!</span>
					<br/>
					Please {this.props.formType.toString().slice(1)} or {this.navLink()}
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

						</div>
						<div className="login-buttons">
							<input className="login-button" type="submit" value="Submit" />
							{guestlogin}
						</div>

				</form>
				<br/>

			</div>
		);
	}

}

export default withRouter(SessionForm);
