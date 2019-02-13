import React, { Component } from 'react';
import './CreatePost.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class CreatePost extends Component {
  render() {
    return (
      <div className="createPost">
        <Link to="/create">
          <button className="button">CreatePost</button>
        </Link>
      </div>
    );
  }
}

export default CreatePost;
