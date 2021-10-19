import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import menu from '../images/menu01.png';
import about from '../images/about2.png';
import location from '../images/location3.png';
import catering from '../images/catering4.png';
import merch from '../images/merch5.png';

class Splash extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div>
      <NavLink to="/menu/">
        <img className="splashPhoto" src={menu} alt="splash"></img></NavLink>
        <NavLink to='/about/'>
        <img className="splashPhoto" src={about} alt="splash"></img></NavLink>
        <NavLink to='/schedule/'>
        <img className="splashPhoto" src={location} alt="splash"></img></NavLink>
        <NavLink to='/catering/'>
        <img className="splashPhoto" src={catering} alt="splash"></img></NavLink>
        <img className="splashPhoto" src={merch} alt="splash"></img>
    </div>
  );
}
}
export default Splash;