import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';
import Footer from './footer';

const App = ({ children }) => (
  <div className="splash">
    <GreetingContainer />
    {children}
    <Footer />

  </div>
);

export default App;
