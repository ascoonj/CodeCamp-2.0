import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from "../SidebarContent";
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import SessionContainer from "../SessionContainer";
import UserSchedule from "../UserSchedule";
import Footer from "../Footer";
import './style.css';

//import otherComponent from '../otherComponent';

const styles = {
    contentHeaderMenuLink: {
      textDecoration: 'none',
      color: 'white',
      padding: 8,
    },
    content: {
      padding: '16px',
    },
  };

class ScheduleSidebar extends Component {
	constructor(props) {
        super(props);
    
        this.state = {
          docked: false,
          open: false,
          transitions: true,
          touch: true,
          shadow: true,
          pullRight: false,
          touchHandleWidth: 20,
          dragToggleDistance: 30,
        };
    
        this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
        this.renderPropNumber = this.renderPropNumber.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
        this.menuButtonClick = this.menuButtonClick.bind(this);
      }
    
      onSetOpen(open) {
        this.setState({open: open});
      }
    
      menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
      }

      renderPropCheckbox(prop) {
        const toggleMethod = (ev) => {
          const newState = {};
          newState[prop] = ev.target.checked;
          this.setState(newState);
        };
    
        return (
          <p key={prop}>
            <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
            <label htmlFor={prop}> {prop}</label>
          </p>);
      }
    
      renderPropNumber(prop) {
        const setMethod = (ev) => {
          const newState = {};
          newState[prop] = parseInt(ev.target.value, 10);
          this.setState(newState);
        };
    
        return (
          <p key={prop}>
             {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
          </p>);
      }
    


      render() {
        const sidebar = <SidebarContent auth={this.props.auth} />;
    
        const contentHeader = (
          <span>
            {!this.state.docked &&
             <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>}
            <span> User Schedule</span>
          </span>);
    
        const sidebarProps = {
          sidebar: sidebar,
          docked: this.state.docked,
          sidebarClassName: 'custom-sidebar-class',
          open: this.state.open,
          touch: this.state.touch,
          shadow: this.state.shadow,
          pullRight: this.state.pullRight,
          touchHandleWidth: this.state.touchHandleWidth,
          dragToggleDistance: this.state.dragToggleDistance,
          transitions: this.state.transitions,
          onSetOpen: this.onSetOpen,
        };

		return (
      <Sidebar {...sidebarProps}>
        <Nav auth={this.props.auth}/>
        
        <Jumbotron>
          <h2 className="display-4">Orlando Codecamp 2018 | March 17th, 2018</h2>
          <p className="lead" style = {{color: "gray"}}>The 13th annual conference is hosted by the Orlando .NET User Group at Seminole State College, Sanford</p>
          <hr className="my-4"/>
          <p className="lead" style = {{color: "gray"}}> Learn how you can partipate as a <a  href="#" role="button">Speaker</a> or <a  href="#" role="button">Sponsor</a> </p>
				</Jumbotron>

    		<SessionContainer auth={this.props.auth}/>
			{/* {props.auth.isAuthenticated && <UserSchedule auth={props.auth}/>} */}
		  	<Footer/>
      
      </Sidebar>
    );
	}
}

export default ScheduleSidebar;