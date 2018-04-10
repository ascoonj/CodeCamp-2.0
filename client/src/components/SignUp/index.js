import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div className = "mainDiv">
		<div className = "formDiv">
			<h1 className="signInHeading">Register to attend</h1>
					<hr/>
					<h3 className="signInHeading">and create your own schedule</h3>
			
			<form>
			<div class="form-group">
				{/* <label>Email</label><br/> */}
				<input value = {props.username} onChange = {props.handleChange} className='form-control' name='username' type='email' placeholder = 'example@email.com'/>
				
			</div>
			<div class="form-group">
				{/* <label>Password</label><br/> */}
				<input name='password' type='password' className='form-control' value = {props.password} onChange = {props.handleChange} placeholder = 'password' />
				
			</div>
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
				<hr/>
						<p className="signInHeading"> or </p>
						<Link to = "/" ><h4 className ="signInHeading">Log in here</h4></Link>
			</form>
		</div>
		</div>
	);
}

export default SignUp;