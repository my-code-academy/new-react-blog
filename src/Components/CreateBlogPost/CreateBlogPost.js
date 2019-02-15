import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './CreateBlogPost.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import axios from 'axios';

class CreateBlogForm extends Component {
  state = {
    date: {},
    title: '',
    readTime: '',
    message: '',
  }

  sendPOSTReqData = (event) => {
    let bodyFormData = new FormData();
    if (this.refs.titleInput !== '') {
      event.preventDefault();
      bodyFormData.set('date', this.state.date);
      bodyFormData.set('readTime', this.state.readTime);
      bodyFormData.set('title', this.state.title);
      bodyFormData.set('message', this.state.message);
      axios.post('https://putsreq.com/3ooGv5XTGNDmZN5fiNCC', bodyFormData);
    }
  }

  handleDateChange(e){
    this.setState({date: e.target.value})
  }
  handleTitleChange(e){
    this.setState({title: e.target.value})
  }

  handleReadTimeChange(e){
    this.setState({readTime: e.target.value})
  }

  handleMessageChange(e){
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <form className="form-width" onSubmit={this.sendPOSTReqData}>
          <ul className="flex-outer">
            <li>
              <label >Date</label>
              <input value={this.state.date} onChange={(e) => this.handleDateChange(e)} name="dateInput" type="date" id="date" />
            </li> 
            <li>
              <label >Read Time</label>
              <input value={this.state.readTime} onChange={(e) => this.handleReadTimeChange(e)} type="text" name="read-time" placeholder="Enter the read time for blog" />
            </li>
            <li>
              <label >Title</label>
              <input value={this.state.title} onChange={(e) => this.handleTitleChange(e)} type="text" name="title" placeholder="Enter the Title of Post" />
            </li>
            <li>
              <label >Message</label>
              <textarea value={this.state.message} onChange={(e) => this.handleMessageChange(e)} rows="6" name="message" placeholder="Enter your message here"></textarea>
            </li>
            <li>
            <Link to="/">
              <button>Back</button>
            </Link>
            <button type='submit'>Submit</button>
            </li>
          </ul>
        </form>
        <Footer />
      </div>

    );
  }
}
export default CreateBlogForm;