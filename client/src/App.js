import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import NewSessionForm from "./components/NewSessionForm";


class App extends Component {
  state = {
    username: "",
    password: "",
    reg_type: "",
    last_name:"",
    first_name:"",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      reg_type: this.state.reg_type,
      last_name: this.state.last_name,
      first_name: this.state.first_name
    };
    this.setState({
      username: "",
      password: "",
      reg_type: "",
      last_name:"",
      first_name:"",
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>

           <Route exact path = "/" render = {()=> {
              return <Welcome auth={this.state.auth} />
          
        }}/>

        <Route exact path = "/main" render = {()=> {
              return <Main auth={this.state.auth} />
          
        }}/>

        {/* <Route exact path = "/other" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/> */}

        <Route exact path = "/signin" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/main" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              username = {this.state.username}
              password = {this.state.password}
              reg_type = {this.state.reg_type}
              last_name= {this.state.last_name}
              first_name= {this.state.first_name}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/main" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              username = {this.state.username}
              password = {this.state.password}
              reg_type = {this.state.reg_type}
              last_name= {this.state.last_name}
              first_name= {this.state.first_name}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/admin/addSession" render = {()=> {
          return <NewSessionForm />
        }
        }/>

        </div>
      </Router>
    );
  }
}

export default App;