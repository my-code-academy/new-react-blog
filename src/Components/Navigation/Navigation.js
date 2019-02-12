import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
      <div><h1>The Artifact</h1>
       <h2>Culture & Art Blog</h2></div>
       <div className="navLink">
        <a href="#!">Blog</a>
       <a href="#!">About</a>
       <a href="#!">Contact</a>
       </div>
      </div>
    );
  }
}

export default Navigation;
