import React, { Component } from 'react';
import './App.css';
import Navbar from './NavbarComponents/Navbar'
import Posts from './PostComponents/posts'

class App extends Component {

  constructor(){
    super()

    this.posts = [
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-1.jpg',
        title: 'Male The Alternative Anti Aging Approach',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-2.jpg',
        title: 'Maui By Air The Best Way Around The Island',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-3.jpg',
        title: 'Business Cards Does Your Business Information Stick',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-4.jpg',
        title: 'A Beginner’s Guide To Setting Up Automatic WordPress Backups',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-5.jpg',
        title: '7 Design Tips on How to Choose, Modify and Improve Your Slider.',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      },
      {
        img: 'https://trendytheme.net/demo/maxrank/assets/img/portfolio-img/portfolio.img-6.jpg',
        title: 'How to create a dropdown menu in WP that includes featured',
        desc: 'Authoritatively administrate long-term high-impact e-business via parallel web services. Synergistically synergize equity invested infrastructures whereas integrated infrastructures.'
      }
    ]
  }


  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
    ];
    return (
      
      <div className="App">
        <header className="AppHeader">
          <div className="container">
            <Navbar links={links} />
          </div>
        </header>
      
        <div className='BlogSection'>
          <div className='container'>

            <div className='row'>
              <div className='col-md-8 col-md-offset-2'>
                <div className='section-title text-center'>
                  <h2>The Best News & Press</h2>
                  <p>Uniquely architect top-line leadership skills with vertical synergy. Uniquely productivate 24/7 metrics rather than enabled processes.</p>
                </div>
              </div>
            </div>
            

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
