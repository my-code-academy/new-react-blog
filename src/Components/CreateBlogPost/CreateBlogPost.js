import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './CreateBlogPost.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import axios from 'axios';

class CreateBlogForm extends Component {

  sendPOSTReqData = (event) => {
    if (this.refs.titleInput !== '') {
      event.preventDefault();
      let payload = {
        date: this.refs.dateInput,
        readTime: this.refs.readTimeInput,
        title: this.refs.title,
      }
      axios.post('https://putsreq.com/fzMHu0JbMj7I1Hfmt1m9', payload);
    }
  }

  render() {
    return (
      <div className="body">
        <Navigation />
        <form className="form-width" method='POST' action='https://putsreq.com/fzMHu0JbMj7I1Hfmt1m9'>
          <ul className="flex-outer">
            <li>
              <label >Date</label>
              <input ref="dateInput" type="date" id="date" />
            </li> 
            <li>
              <label >Read Time</label>
              <input name="readTimeInput" type="text" id="read-time" placeholder="Enter the read time for blog" />
            </li>
            <li>
              <label >Title</label>
              <input name="titleInput" type="text" id="title" placeholder="Enter the Title of Post" />
            </li>
            <li>
              <label >Message</label>
              <textarea name="messageInput" rows="6" id="message" placeholder="Enter your message here"></textarea>
            </li>
            <li>

            <Link to="/">
              <button>Back</button>
            </Link>
            <button type="Submit">Submit</button>
            </li>
          </ul>
        </form>
        <Footer />
      </div>

    );
  }
}
export default CreateBlogForm;