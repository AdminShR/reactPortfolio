import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Services from './Components/Services';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <React.StrictMode>
    <Navigation logoTitle = "React portfolio"/>
    <Header title = 'Hush kelibsiz !!!' paragraph = 'Bu mening shaxsiy veb saytim'/>
    <Services/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();