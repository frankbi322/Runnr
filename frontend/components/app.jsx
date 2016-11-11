import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="splash">
    <header>
      <Link to="/" className="header-link"><h1>RunnR</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
