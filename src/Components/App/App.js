import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
// import cards from '../../mockData/index.json'
import CardGridContainer from '../../Containers/CardGridContainer/CardGridContainer';
import CreatePost from '../CreatePost/CreatePost';

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <CardGridContainer />
        <CreatePost />
        <Footer />
      </div>
    );
  }
}

export default App;
