import React, { Component } from 'react';
import About from './About.js';
import Footer from './Footer.js';
import { Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <About />
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
