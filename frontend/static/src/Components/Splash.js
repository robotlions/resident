import React, {Component} from 'react';
import '../App.css';
import feast from '../images/feast.JPEG';

class Splash extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div>
        <img className="splashPhoto" src={feast} alt="splash"></img>
        {/* <div className="homeText"><h4>Optional Introductory Text</h4></div> */}
    </div>
  );
}
}
export default Splash;