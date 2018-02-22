import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Login from './Login.js';
import Signup from './Signup.js';
import mainPage from './mainPage.js';
import OneTask from './oneTask.js';
import sampleText from './SampleText.js';
import TaskDetails from './TaskDetails.js'
import Traits from './Traits.js';
import Profile from './profile.js';
import Home from './Home.js'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/tasks/:taskId' component={TaskDetails} />
          <Route path='/users/:username' component={Profile} />
        </div>
      </div>
    );
  }
}


export default App;
