import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './views/Register';
import Login from './views/Login';
import Posts from './views/Posts';
import SinglePost from './views/SinglePost';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  login = (token) => {
    this.setState({
      loggedIn: token
    })
  }

  logout = () => {
    this.setState({
      loggedIn: null
    })
    console.log('You have been logged out.')
  }

  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Posts />}/>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login logIn={this.login}/>} />
            <Route path='/blog/posts/:postId' element={<SinglePost />} />
          </Routes>
        </div>
      </>
    );
  }
}
