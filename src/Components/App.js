import React, { Component } from 'react';
import './App.css';
import Posts from './PostComponents/posts'

class App extends Component {

  constructor(){
    super()

    this.posts = [
      {
        img: '../assets/img/img1.jpg',
        title: 'Male The Alternative Anti Aging Approach',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: '../assets/img/img1.jpg',
        title: 'Maui By Air The Best Way Around The Island',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        title: 'Business Cards Does Your Business Information Stick',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: '../assets/img/img1.jpg',
        title: 'Vinyl Banners With Its Different Types Kinds And Applications',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        title: 'Illustration In Marketing Materials',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        title: 'Tips For Development An Effective Business App',
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

              { this.posts.map((post, index) => {
                return <Posts post={post} key={index} />
              }) }

            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
