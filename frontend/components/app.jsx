import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="splash">
    <header>
      <div className="logo-container">
      <Link  to="/" className="header-link"><img className="logo" src="http://res.cloudinary.com/frankbi322/image/upload/v1478906064/Screen_Shot_2016-11-11_at_3.12.36_PM_fbd0hh.png"></img></Link>
    </div>
    <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
