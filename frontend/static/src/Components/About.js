import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../About.css';

const insta = <FontAwesomeIcon icon={faInstagram} />
const email = <FontAwesomeIcon icon={faEnvelopeOpenText} />
const phone = <FontAwesomeIcon icon={faPhone} />
const linkedin = <FontAwesomeIcon icon={faLinkedin}/>
const facebook = <FontAwesomeIcon icon={faFacebook}/>
const twitter = <FontAwesomeIcon icon={faTwitter}/>

class About extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

          const socialMediaLinks = <p>{insta} {linkedin} {facebook} {twitter} {email} {phone}</p>

  return(
    <div className="About">
      {socialMediaLinks}
       <h1 style={{marginTop: "5vh"}}>About Us:</h1>
       <p>Hi! This is where the ABOUT US information will go! It will be informative and entertaining
         and will touch the heart. Add new information again.
       </p>
    </div>
  );
}
}
export default About;
