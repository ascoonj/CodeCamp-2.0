import React from 'react';
import axios from 'axios';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

class NewSessionForm extends React.Component {


	state = {
		inputs: {
			session_name : "",
			session_time: "",
			location: "",
			short_descr: "",
			long_descr: "",
			speaker: "",
			track: "",
			audience: "",
			photo: "",
			presentation: "",
			isActive:""
		},
		speakers: []
	};

	handleSubmit (event) {
		event.preventDefault();

		axios.post("/api/sessions",this.state.inputs).then((response)=>{
			console.log(response.data)
		}).catch((err)=>{
			console.log(err)
		});
	};

	handleChange = (event) => {
		const {name, value} = event.target;    
			// Set the state for the appropriate input field
		this.setState({
			inputs: {
				...this.state.inputs,
		  		[name]: value
			}
		});
	  }
	
	ComponentDidMount () {
		// axios call to get all speakers
			//with results, set state.speakers to the whole speakers array / just the speakers names and Id
	}


	render () {
		const {inputs, speakers} = this.state;
		return(
			<div>
				<form>
				<label htmlFor='session_name' >Session Name</label><br/>
				<input value = {inputs.session_name} onChange = {this.handleChange} name='session_name' type='text' />
				<br />
				<label htmlFor='session_time' >Session Time</label><br/>
				<input value = {inputs.session_time} onChange = {this.handleChange} name='session_time' type='text' />
				<br />
				<label htmlFor='location' >Location</label><br/>
				<input value = {inputs.location} onChange = {this.handleChange} name='location' type='text' />
				<br />
				<label htmlFor='short_descr' >Short Description</label><br />
				<input value = {inputs.short_descr} onChange = {this.handleChange} name='short_descr' type='text' />
				<br />
				<label htmlFor='long_descr' >Long Description</label><br/>
				<input value = {inputs.long_descr} onChange = {this.handleChange} name='long_descr' type='text' />
				<br />
				<label htmlFor='track' >Track</label><br/>
				<input value = {inputs.track} onChange = {this.handleChange} name='track' type='text' />
				<br />
				<label htmlFor='audience' >Audience</label><br/>
				<input value = {inputs.audience} onChange = {this.handleChange} name='audience' type='text' />
				<br />
				<label htmlFor='photo' >Photo</label><br/>
				<input value = {inputs.photo} onChange = {this.handleChange} name='photo' type='text' />
				<br />
				<label htmlFor='presentation' >Presentation</label><br/>
				<input value = {inputs.presentation} onChange = {this.handleChange} name='presentation' type='text' />
				<br />
				<label htmlFor='isActive' >Is Active</label><br/>
				<input value = {inputs.isActive} onChange = {this.handleChange} name='isActive' type='text' />
				<br />
				

				{/* <select value = {inputs.speaker} onChange = {this.handleChange} name='speaker'>
					{speakers.map((element)=>{
						<option key= {element._id} value={element._id} >{element.name} </option>
					})}
				</select> */}


				<button type = 'submit'  onClick = {this.handleSubmit}>Add</button>
			</form>

			</div>
		);
	}
}

export default NewSessionForm;