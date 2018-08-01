import React, { Component } from 'react';
import Post from './SinglePost/post'
import BlogImgOne from './../../assets/img/img1.jpg'

class Posts extends Component{
    render(){
        return(
            <div className='col-md-4'>
                <div className='blogWrapper'>
                    <div className='postThumbnail'>
                        <img src={BlogImgOne} />
                    </div>
                  <div className='blogHeader'>
                    <h2>
                        <a href='#'>{this.props.post.title}</a>
                    </h2>
                    <p>{this.props.post.desc}</p>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Posts