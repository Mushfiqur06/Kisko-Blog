import React, { Component } from 'react';
import Post from './SinglePost/post'

class Posts extends Component{
    render(){
        // let blogImagesArray = ['img1', 'img2', 'img3'];
        // let blogImages = blogImagesArray.map((image,index) => {
        //     return <img key={index} src={require(`./../../assets/img/${image}.jpg`)} alt="" className="img-responsive" />
        // })
        return(
            <div className='col-md-4'>
                <div className='blogWrapper'>
                    <div className='postThumbnail'>
                        <img src={this.props.post.img} />
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