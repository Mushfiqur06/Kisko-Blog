import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import Posts from './PostComponents/posts'

class App extends Component {

  constructor(){
    super()

    this.posts = [
      {
        title: 'Male The Alternative Anti Aging Approach',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        title: 'Maui By Air The Best Way Around The Island',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        title: 'Business Cards Does Your Business Information Stick',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      }
    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='container'>
            <h1 className="App-title text-center">Welcome to Kisko Blog Site</h1>
          </div>
          
        </header>
      
        <div className='BlogSection'>
          <div className='container'>
            <div className='row'>

              <div className='col-md-4'>
                <div className='blogWrapper'>
                  <div className='blogHeader'>
                    <Posts posts={this.posts} />
                  </div>
                </div>
                
              </div>

            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
