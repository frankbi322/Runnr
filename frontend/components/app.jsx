import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';

const App = ({ children }) => (
  <div className="splash">
    <GreetingContainer />
    {children}


  </div>
);

export default App;
