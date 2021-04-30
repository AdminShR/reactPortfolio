import React, {Component} from 'react';

import Background from '../img/IT.jpg';
import './Header.css';

const myStyles = {
    backgroundImage : ` url(${Background}) ` ,
     height : '375px', 
     backgroundSize : 'cover'
}



class Header extends Component {

    
render(){
    return(

  <header style= {myStyles}>
  <h1>{this.props.title}</h1>
  <p>{this.props.paragraph}</p>
 </header>
   
   );
}


} ;

export default Header;