import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import Post from './PostComponents/post'

class App extends Component {

  constructor(){
    super()

    this.posts = [
      {
        title: 'Kisko Title',
        desc: 'This is kisko Description'
      }
    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='container'>
            <h1 className="App-title">Welcome to Kisko Blog Site</h1>
          </div>
          <div className='container'>
          <Post post={this.posts[0]} />
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
