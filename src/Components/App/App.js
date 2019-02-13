import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
// import cards from '../../mockData/index.json'
import CardGrid from '../CardGrid/CardGrid';
import CreatePost from '../CreatePost/CreatePost';
import getApiData from '../../fetchData';

class App extends Component {

  state = {
    bookData: [],
  }

  componentDidMount() {
    getApiData().then((jsonObj) => {
      console.log(jsonObj);
      this.setState({bookData:  jsonObj.data});
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <CardGrid cards={this.state.bookData} />
        <CreatePost />
        <Footer />

      </div>
    );
  }
}

export default App;
