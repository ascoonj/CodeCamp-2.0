import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div className = "mainDiv">
		<div className = "formDiv">
			<h1 className="signInHeading">Register to attend</h1>
			<hr/>
			<h3 className="signInHeading">And create your own schedule</h3>
			
			<form>
			<div className="form-group">
				{/* <label>Email</label><br/> */}
				<input value = {props.username} onChange = {props.handleChange} className='form-control' name='username' type='email' placeholder = 'example@email.com'/>
				
			</div>
			<div className="form-group">
				{/* <label>Password</label><br/> */}
				<input name='password' type='password' className='form-control' value = {props.password} onChange = {props.handleChange} placeholder = 'password' />
			</div>
			{/* <div className="form-group"> */}
				{/* <label>Password</label><br/> */}
				{/* <input name='reg_type' type='text' className='form-control' value = {props.reg_type} onChange = {props.handleChange} placeholder = 'registration type' />
			</div> */}

			<div className="form-group">
				{/* <label htmlFor="reg_type">registration type</label> */}
				<select name = 'reg_type' className="form-control" value = {props.reg_type} onChange = {props.handleChange} placeholder='registration type'>
					<option value="" selected disabled>registration type</option>
					<option>attendee</option>
					<option>speaker</option>
					<option>sponsor</option>
					<option>admin</option>
				</select>
			</div>	



			<div className="form-group">
				{/* <label>Password</label><br/> */}
				<input name='first_name' type='text' className='form-control' value = {props.first_name} onChange = {props.handleChange} placeholder = 'first name' />
			</div>
			<div className="form-group">
				{/* <label>Password</label><br/> */}
				<input name='last_name' type='text' className='form-control' value = {props.last_name} onChange = {props.handleChange} placeholder = 'last name' />
			</div>

				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
				<hr/>
						<p className="signInHeading"> or </p>
						<Link to = "/signin" ><h4 className ="signInHeading">Log in here</h4></Link>
			</form>
		</div>
		</div>
	);
}

export default SignUp;