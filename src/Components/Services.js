import React, { Component } from 'react';
import './services.css';


class Services extends Component {
    render() {
        return (
<div className = "services">
<h3>services</h3>
<h2>What we Offer</h2>

<div className="row">
  <Icon myIcon={serviceObj[0].icon} myTitle={serviceObj[0].title} myDescription={serviceObj[0].description}/>
  <Icon myIcon={serviceObj[1].icon} myTitle={serviceObj[1].title} myDescription={serviceObj[1].description}/>
  <Icon myIcon={serviceObj[2].icon} myTitle={serviceObj[2].title} myDescription={serviceObj[2].description}/>
  <Icon myIcon={serviceObj[3].icon} myTitle={serviceObj[3].title} myDescription={serviceObj[3].description}/>
</div>

</div>
        );
    }
}


const serviceObj = [
    {
        icon:<span class="material-icons">phonelink</span>,
        title:'Responsive',
        description:'Looks great on any screen size!'
    },
    {
        icon:<span class="material-icons">create</span>,
        title:'Redesigned',
        description:'Freshly redesigned for Bootstrap 4.'
    },
    {
        icon:<span class="material-icons">thumb_up_alt</span>,
        title:'Favorited',
        description:'Millions of users love Start of Bootstrap!'
    },
    {
        icon:<span class="material-icons">help_center</span>,
        title:'Question',
        description:'I mustache you question ...'
    }
]
class Icon extends Component {
    render() {
        return (
            <div>
                <span>{this.props.myIcon}</span>
                <h4>{this.props.myTitle}</h4>
                <p>{this.props.myDescription}</p>
            </div>
        );
   
    }
}

export default Services;