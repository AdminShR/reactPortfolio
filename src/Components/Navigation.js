import React , { Component} from 'react';
import './Navigation.css' 
class Navigation extends Component {
render() {
    const section = ['Home', 'Services','Portfolio','About','Contact'];
    const navLinks = section.map( section => {
        return (
            <li><a href={'#' + section}>{section}</a></li>
        )
    })
  return (
<nav>


<h2 className="port">{this.props.logoTitle}</h2>

<ul>
{navLinks}
</ul>


</nav>
  );
}
}

export default Navigation;