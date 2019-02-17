// import React from 'react';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
// import App from './Components/App/App';
// import CreateBlogPost from './Components/CreateBlogPost/CreateBlogPost';

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route exact path="/create" component={CreateBlogPost}/>
//     </div>
//   </Router>
// )

import App from './Components/App/App';
import CreateBlogPost from './Components/CreateBlogPost/CreateBlogPost';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import CreateBlogPostContainer from './Containers/CreateBlogPostContainer'

const Routing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreateBlogPostContainer} />
      </div>
    </Router>
  );
}

export default Routing;