/* 
author: Nikita G.
description: This application shows EDA visualizations of the titanic dataset and 
predicts survival of a "passenger" according ot the input given by the user.
*/

import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Main />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;


