import React from 'react'
import  './Howitworks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendar, faEnvelopeOpen,  faHandPointer,  faHome,  faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";


const Howitworks = () => {
  return (
    <div>
    <div className='HowitWorks'>
    <div  className='roundCirlce'>
    <span>1</span>
    <FontAwesomeIcon icon={faHandPointer}  className="RoundCircleicon"/>
     
    </div>
    <hr  className='borderwidth'/>
  
  
    <div className='roundCirlce'>
    <span >2</span>
  
    <FontAwesomeIcon icon={faCalendar}  className="RoundCircleicon"/>
  
    </div>
  
    <hr  className='borderwidth'/>
  
    <div className='roundCirlce'>
    <span >3</span>
    <FontAwesomeIcon icon={ faHome }  className="RoundCircleicon1"/>
  
    </div>
    </div>
  
  <div className='HowitWorksText'>
  <h4>CHOOSE SERVICES</h4>
  <h4>CONNECT WITH US</h4>
  <h4>AT YOUR DOORSTEP!</h4>
  
  </div>
  
  <div className='HowitworksParagraph' >
  <p>
  Golden Honey offers all your beauty needs from the comfort of your location, every day from 9:30 AM to 10:00 PM. We neither believe in rushing your experience nor using mediocre products. Our top priority is to give you the luxury experience using the best products sourced from around the world - without hurting your pocket!
  </p>
  </div>
    </div>
  )
}

export default Howitworks