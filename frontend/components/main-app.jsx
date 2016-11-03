import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
//add new comment
//adding another comment

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>RunnR</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
