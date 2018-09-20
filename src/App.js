import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import Header from './Layout/Header';
import Content from './Layout/Content';
import Sidebar from './Layout/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header />
            <div className="container">
              <Sidebar />
              <Content />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
