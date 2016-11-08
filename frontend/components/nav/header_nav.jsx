import React from 'react';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="header-nav">
        <h1>Runnr</h1>
        <span className="header-nav-el">Dashboard</span>
        <span className="header-nav-el">All Routes</span>
        <span className="header-nav-el">Friends</span>
      </div>
    );
  }
}

export default HeaderNav;
