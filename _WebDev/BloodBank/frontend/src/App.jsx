import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Request from './components/request';
import Blog from './components/blog';
import Login from './components/login';
import Signup from './components/signup';
import Post from './components/post';
import Admin from './components/admin';



function App() {
  return (
    <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/request" component={Request} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/post" component={Post} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
  );
}
export default App;
